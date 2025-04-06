const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  wallet: { type: Number, default: 0 }
});

module.exports = mongoose.model("Wallet", walletSchema);
