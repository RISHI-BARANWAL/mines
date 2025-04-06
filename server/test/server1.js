// // temperory
// // const paypal = require("@paypal/checkout-server-sdk");
// const paypal = require('@paypal/paypal-server-sdk');
// console.log(paypal.version);


// // const PAYPAL_CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID";
// // const PAYPAL_SECRET = "YOUR_PAYPAL_SECRET";

// const environment = new paypal.core.SandboxEnvironment(
//     "YOUR_PAYPAL_CLIENT_ID", //  AY0hQGG_3BZbkQZ5insHINZC4LTT_Q4PCaRnLc8DMclncJol6EK4sPaJcobR4EbNV_NVCNrwUBnQWjDU
//     "YOUR_PAYPAL_SECRET"  //  ENLzpe2OqmJCpV0S4WkRtbXOchurJYzEBeJ-N9uw_6xmU7hFUJL3mBm-mqWBKAVAZdmjaHIIAa3a7AxR
// );
// const client = new paypal.core.PayPalHttpClient(environment);

// const generatePayPalToken = async () => {
//   const response = await axios.post(
//     "https://api-m.sandbox.paypal.com/v1/oauth2/token",
//     "grant_type=client_credentials",
//     { auth: { username: PAYPAL_CLIENT_ID, password: PAYPAL_SECRET } }
//   );
//   return response.data.access_token;
// };

// app.post("/api/paypal/pay", async (req, res) => {
//   const { amount } = req.body;
//   const token = await generatePayPalToken();

//   const order = await axios.post(
//     "https://api-m.sandbox.paypal.com/v2/checkout/orders",
//     { intent: "CAPTURE", purchase_units: [{ amount: { currency_code: "INR", value: amount } }] },
//     { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
//   );

//   res.json(order.data);
// });
