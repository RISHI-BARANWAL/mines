import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  // const userId = localStorage.getItem("userId"); // "user123"; // Retrieve from auth if needed

  useEffect(() => {
    if (orderId) {
      axios.post("http://localhost:5003/api/paypal/capture-order", { orderId })  // , userId
        .then(response => {
          alert(`Payment Successful! New Wallet Balance: $${response.data.newBalance}`);
          window.location.href = "/wallet"; // Redirect back to wallet
        })
        .catch(error => {
          console.error("❌ Payment Capture Error:", error);
          alert("Failed to capture PayPal order.");
        });
    }
  }, [orderId]);  // , userId

  return <h2>Processing Payment...</h2>;
};

export default PaymentSuccess;


//  This React component handles the PayPal payment success page by capturing the payment and 
// updating the user's wallet balance.