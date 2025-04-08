const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5003; 

// ✅ MongoDB Atlas connection
const mongoURI = "mongodb+srv://david:1David123@cluster0.iflqqm2.mongodb.net/bharatzen1?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  // process.env.MONGO_URI  mongoURI
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  // ✅ Generate PayPal Token
const generatePayPalToken = async () => { // ..... new added
  const response = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    "grant_type=client_credentials",
    { auth: { username: process.env.PAYPAL_CLIENT_ID, password: process.env.PAYPAL_SECRET } }
  );
  return response.data.access_token;
};

// ✅ Wallet Schema
const walletSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  wallet: { type: Number, default: 0 }
});

const Wallet = mongoose.model("Wallet", walletSchema);

// ✅ Game History Schema
const gameHistorySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  dateTime: { type: Date, required: true }, // default: Date.now
  result: { type: String, required: true },
  amt: { type: Number, required: true } // mongoose.Schema.Types.Mixed
});

const GameHistory = mongoose.model("GameHistory", gameHistorySchema);

//
// ✅ API ROUTES
app.post("/api/paypal/create-order", async (req, res) => { // ..... new added
  const { amount } = req.body;
  try {
    const token = await generatePayPalToken();
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: amount } }] // USD
      },
      { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
    );
    console.log("✅ PayPal Order Created:", response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "PayPal order creation failed" });
  }
});

app.post("/api/paypal/capture-order", async (req, res) => { // ..... new added
  const { orderId, userId } = req.body;
  try {
    const token = await generatePayPalToken();
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {},
      { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
    );
    if (response.data.status === "COMPLETED") {
      const amount = parseFloat(response.data.purchase_units[0].payments.captures[0].amount.value);
      const wallet = await Wallet.findOneAndUpdate(
        { userId: userId || "0xAB12CD34EF56" },
        { $inc: { wallet: amount } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, message: "Payment captured and wallet updated", newBalance: wallet.wallet });
    } else {
      return res.status(400).json({ error: "Payment capture failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "PayPal capture failed" });
  }
});

//

// 💰 Get wallet balance
// const { userId } = req.params;
app.get("/api/wallet", async (req, res) => { // /:userId
  try {
    // const { userId } = req.params;
    const userId = "0xAB12CD34EF56"  // Static userId for now (you can change it dynamically) // "rishi123"
    const wallet = await Wallet.findOne({ userId }); // const { userId, name, amt, result, dateTime } = req.body;

    if (!wallet) {
      // Create wallet if not found
      const newWallet = new Wallet({ userId, wallet: 0 });
      await newWallet.save();
      return res.json({ balance: 0 });
    }

    res.json({ balance: wallet.wallet });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    res.status(500).json({ error: "Failed to fetch wallet balance" });
  }
});

// 💰 Update wallet balance
app.post("/api/wallet/update", async (req, res) => {
  const { amount } = req.body; // , userId
  const userId = "0xAB12CD34EF56"; // rishi123

  if (isNaN(amount)) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ error: "Wallet not found" });
    }

    let currentWallet = Number(wallet.wallet) || 0;
    wallet.wallet = currentWallet-parseFloat(amount); //parseFloat(amount);

    await wallet.save();

    res.json({ success: true, newBalance: wallet.wallet });
  } catch (error) {
    console.error("Error updating wallet:", error);
    res.status(500).json({ error: "Failed to update wallet" });
  }
});

// 🕹️ Get last 30 game transactions
app.get("/api/game-history", async (req, res) => {
  try {
    const history = await GameHistory.find().sort({ dateTime: -1 }).limit(30);
    res.json(history);
  } catch (error) {
    console.error("Error fetching game history:", error);
    res.status(500).json({ error: "Failed to fetch game history" });
  }
});

// 🕹️ Save game transaction
app.post("/api/game-history/add", async (req, res) => {
  const { userId, name, dateTime, result, amt } = req.body;

  if (!userId || !name || isNaN(amt)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  try {
    const newTransaction = new GameHistory({ userId, name, dateTime, result, amt });
    await newTransaction.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving game transaction:", error);
    res.status(500).json({ error: "Failed to save game transaction" });
  }
});

app.use((req, res, next) => {  // ..... new added
  res.setHeader(
    "Content-Security-Policy",
    "img-src 'self' https://*.paypal.com https://*.googleusercontent.com; connect-src 'self' https://*.paypal.com;"
  );
  next();
});
// ✅ Server Listening
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));