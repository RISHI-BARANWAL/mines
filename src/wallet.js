// import React, { useState, useEffect } from "react"; //useEffect
// import "bootstrap/dist/css/bootstrap.min.css";
// import { QRCodeCanvas } from "qrcode.react";

// const Wallet = ({ wallet, setWallet }) => { 
//   const [amount, setAmount] = useState("");
//   const [upiID, setUpiID] = useState("");
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("none");
//   const [showQRCode, setShowQRCode] = useState(false);
//   const [qrPaid, setQrPaid] = useState(false);

//   const handleUPIPayment = (useScanner = false) => {
//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     if (useScanner) {
//       setShowQRCode(true);
//       setQrPaid(false);
//       return;
//     }

//     if (!upiID || (!upiID.includes("@okhdfcbank") && !upiID.includes("@upi"))) {
//       alert("Please enter a valid UPI ID.");
//       return;
//     }

//     setIsProcessing(true);
//     setTimeout(() => {
//       setWallet(wallet + addAmount);
//       setAmount("");
//       setUpiID("");
//       setIsProcessing(false);
//       setPaymentMethod("none");
//       alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
//     }, 3000);
//   };

//   const handleCardPayment = () => {
//     const { cardNumber, expiryDate, cvv } = cardDetails;
//     if (!cardNumber || !expiryDate || !cvv) {
//       alert("Please fill in all card details.");
//       return;
//     }
//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessing(true);
//     setTimeout(() => {
//       setWallet(wallet + addAmount);
//       setAmount("");
//       setCardDetails({ cardNumber: "", expiryDate: "", cvv: "" });
//       setIsProcessing(false);
//       setPaymentMethod("none");
//       alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
//     }, 3000);
//   };

//   const confirmQRPayment = () => {
//     if (!qrPaid) {
//       alert("Please complete the payment before confirming.");
//       return;
//     }
//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) return;
//     setWallet(wallet + addAmount);
//     setAmount("");
//     setShowQRCode(false);
//     setQrPaid(false);
//     alert(`QR Payment of Rs. ${addAmount} confirmed! Wallet updated.`);
//   };

//   return (
//     <div className="container mt-5 pb-5">
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           <h3>Game Wallet</h3>
//         </div>
//         <div className="card-body">
//         {isProcessing && <p className="text-warning">Processing payment...</p>}
//           <h5 className="card-title">Your Wallet Balance: Rs. {wallet.toFixed(2)}</h5>
//           <div className="form-group">
//             <label className="mt-3">Add Money:</label>
//             <input
//               type="number"
//               className="form-control mt-2"
//               placeholder="Enter amount"
//               min={1}
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           {showQRCode && (
//             <div className="mt-3">
//               <h6>Scan the QR Code to pay Rs. {amount}:</h6>
//               <QRCodeCanvas value={`upi://pay?pa=rishibaranwal22@okhdfcbank&am=${amount}`} size={150} /><br/>
//               <button className="btn btn-success mt-3" onClick={() => setQrPaid(true)}>
//                 I've Paid
//               </button> &nbsp;
//               <button className="btn btn-primary mt-3" onClick={confirmQRPayment} disabled={!qrPaid || !amount || amount <= 0}>
//                 Confirm Payment
//               </button>
//             </div>
//           )}

//           {paymentMethod === "upi" && !showQRCode && (
//             <div className="form-group mt-3">
//               <label>UPI ID:</label>
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Enter your UPI ID (e.g., user@upi)"
//                 value={upiID}
//                 onChange={(e) => setUpiID(e.target.value)}
//               />
//               <button className="btn btn-primary mt-3" onClick={() => handleUPIPayment(false)} disabled={!amount || amount <= 0}>
//                 Pay with UPI
//               </button>
//               <button className="btn btn-warning mt-3 mx-2" onClick={() => handleUPIPayment(true)} disabled={!amount || amount <= 0}>
//                 Pay via QR Scanner
//               </button>
//             </div>
//           )}

//           {paymentMethod === "card" && (
//             <div className="form-group mt-3">
//               <label>Card Details:</label>
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Card Number"
//                 value={cardDetails.cardNumber}
//                 onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//               />
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Expiry Date (MM/YY)"
//                 value={cardDetails.expiryDate}
//                 onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
//               />
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="CVV"
//                 value={cardDetails.cvv}
//                 onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//               />
//               <button className="btn btn-primary mt-3" onClick={handleCardPayment} disabled={!amount || amount <= 0}>
//                 Pay with Card
//               </button>
//             </div>
//           )}

//           {paymentMethod === "none" && !showQRCode && (
//             <div className="mt-3">
//               <button className="btn btn-outline-primary mx-2" onClick={() => setPaymentMethod("upi")} disabled={!amount || amount <= 0}>
//                 UPI/QR Code Payment
//               </button>
//               <button className="btn btn-outline-success mx-2" onClick={() => setPaymentMethod("card")} disabled={!amount || amount <= 0}>
//                 Credit/Debit Card
//               </button>
//             </div>
//           )}
//           {paymentMethod !== "none" && (
//             <button
//               className="btn btn-secondary mt-3"
//               onClick={() => {
//                 setPaymentMethod("none");
//                 setShowQRCode(false);
//               }}
//               disabled={isProcessing}
//             >
//               Reset Payment Option
//             </button>
//           )}
//         </div>
//         <div Name="card-footer text-muted">Happy Gaming!</div>
//       </div>
//     </div>
//   );
// };

// export default Wallet;




// import React, { useState, useEffect, useCallback} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { QRCodeCanvas } from "qrcode.react";
// // import axios from "axios";
// // import io from "socket.io-client";
// // const socket = io("http://localhost:5003");


//   const Wallet = ({ wallet, setWallet}) => { // , userId , betAmount, setBetAmount, wonAmount, gameStarted 
//   const [amount, setAmount] = useState("");
//   const [upiID, setUpiID] = useState("");
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("none");
//   const [showQRCode, setShowQRCode] = useState(false);
//   const [qrPaid, setQrPaid] = useState(false);
//   // const [gameWallet, setGameWallet] = useState(wallet);

//   // ✅ Fetch Wallet Balance from backend and send to backend (imp)
//   const fetchWalletBalance = useCallback(() => {
//     // if (!userId) return;
//     fetch("http://localhost:5003/api/wallet") //  userId
//       .then((response) => response.json())
//       .then((data) => { 
//         setWallet(data.balance);//) ✅ Set wallet with fetched balance
//         // setGameWallet(data.balance); //  setGameWallet
//       })
//       .catch((error) => console.error("Error fetching wallet:", error));
//   }, [setWallet]); // , userId
  
//   const updateWalletBalance = useCallback((addAmount) => {
//     //addAmount = (amount !== true ? addAmount - setWallet : addAmount);
//     if (!addAmount || isNaN(addAmount)) {
//       console.error("Invalid amount:", addAmount);
//       return;
//     }
//     addAmount= addAmount* -1;
//     fetch("http://localhost:5003/api/wallet/update", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: addAmount}),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setWallet(data.newBalance); // Update wallet with the new backend balance  // setGameWallet(data.newBalance);
//           fetchWalletBalance(); // ✅ Ensure latest balance is fetched after update  // alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
//         } else {
//           alert("Error updating wallet balance.");
//         }
//       })
//       .catch((error) => console.error("Error updating wallet:", error));
//   }, [setWallet, fetchWalletBalance]); // remove amount // , fetchWalletBalance

//   // ✅ Fetch wallet balance on component mount
//   useEffect(() => {
//     fetchWalletBalance();  // fetchWalletBalance()
//   }, [fetchWalletBalance]); // fetchWalletBalance
 
//   // ✅ Event listener to catch wallet changes from App.js
//   // useEffect(() => {
//   //   const handleWalletUpdate = (event) => {
//   //     const updatedWallet = event.detail.wallet;
//   //     setWallet(updatedWallet);
//   //     updateWalletBalance(updatedWallet);  // Send updated wallet to backend
//   //   };

//   //   window.addEventListener("walletUpdated", handleWalletUpdate);

//   //   return () => {
//   //     window.removeEventListener("walletUpdated", handleWalletUpdate);
//   //   };
//   // }, [setWallet, updateWalletBalance]);

//   const handleUPIPayment = (useScanner = false) => {
//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     if (useScanner) {
//       setShowQRCode(true);
//       setQrPaid(false);
//       return;
//     }

//     if (!upiID || (!upiID.includes("@okhdfcbank") && !upiID.includes("@upi"))) {
//       alert("Please enter a valid UPI ID.");
//       return;
//     }

//     setIsProcessing(true);
//     setTimeout(() => {
//       // setWallet(wallet + addAmount);
//       updateWalletBalance(addAmount);
//       setAmount("");
//       setUpiID("");
//       setIsProcessing(false);
//       setPaymentMethod("none");
//       alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
//     }, 3000);
//   };

//   const handleCardPayment = () => {
//     const { cardNumber, expiryDate, cvv } = cardDetails;
//     if (!cardNumber || !expiryDate || !cvv) {
//       alert("Please fill in all card details.");
//       return;
//     }

//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     setIsProcessing(true);
//     setTimeout(() => {
//       // setWallet(wallet + addAmount);
//       updateWalletBalance(addAmount);
//       setAmount("");
//       setCardDetails({ cardNumber: "", expiryDate: "", cvv: "" });
//       setIsProcessing(false);
//       setPaymentMethod("none");
//       alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
//     }, 3000);
//   };

//   const confirmQRPayment = () => {
//     if (!qrPaid) {
//       alert("Please complete the payment before confirming.");
//       return;
//     }
//     const addAmount = parseFloat(amount);
//     if (isNaN(addAmount) || addAmount <= 0) return;
//     // setWallet(wallet + addAmount);
//     updateWalletBalance(addAmount);
//     setAmount("");
//     setShowQRCode(false);
//     setQrPaid(false);
//     alert(`QR Payment of Rs. ${addAmount} confirmed! Wallet updated.`);
//   };

//   return (
//     <div className="container mt-5 pb-5">
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           <h3>Game Wallet</h3>
//         </div>
//         <div className="card-body">
//           {isProcessing && <p className="text-warning">Processing payment...</p>}
//           <h5 className="card-title">Your Wallet Balance: Rs. {Number(wallet.toFixed(2))}</h5> {/* .toFixed(2) */}
//           <div className="form-group">
//             <label className="mt-3">Add Money:</label><input type="number" className="form-control mt-2" placeholder="Enter amount" min={1} value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>

//           {showQRCode && (
//             <div className="mt-3">
//               <h6>Scan the QR Code to pay Rs. {amount}:</h6>
//               <QRCodeCanvas value={`upi://pay?pa=rishibaranwal22@okhdfcbank&am=${amount}`} size={150} /><br/>
//               <button className="btn btn-success mt-3" onClick={() => setQrPaid(true)}>I've Paid</button> &nbsp;
//               <button className="btn btn-primary mt-3" onClick={  confirmQRPayment } disabled={!qrPaid || !amount || amount <= 0}>Confirm Payment</button> {/* () => { updateWalletBalance(parseFloat(amount)); confirmQRPayment(); } // ✅ Calls QR confirmation logic // ✅ Ensures correct amount update */}
//             </div>
//           )}

//           {paymentMethod === "upi" && !showQRCode && (
//             <div className="form-group mt-3">
//               <input type="text" className="form-control mt-2" placeholder="Enter your UPI ID (e.g., user@upi)" value={upiID} onChange={(e) => setUpiID(e.target.value)} />
//               <button className="btn btn-primary mt-3" onClick={() => handleUPIPayment(false)} disabled={!amount || amount <= 0}>Pay with UPI</button>
//               <button className="btn btn-warning mt-3 mx-2" onClick={() => handleUPIPayment(true)} disabled={!amount || amount <= 0}>Pay via QR Scanner</button>
//             </div>
//           )}

//           {paymentMethod === "card" && (
//             <div className="form-group mt-3">
//               <label>Card Details:</label>
//               <input type="text" className="form-control mt-2" placeholder="Card Number" value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
//               <input type="text" className="form-control mt-2" placeholder="Expiry Date (MM/YY)" value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
//               <input type="text" className="form-control mt-2" placeholder="CVV" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
//               <button className="btn btn-primary mt-3" onClick={handleCardPayment} disabled={!amount || amount <= 0}>Pay with Card</button>
//             </div>
//           )}

//            {paymentMethod === "none" && !showQRCode && (
//             <div className="mt-3">
//               <button className="btn btn-outline-primary mx-2" onClick={() => setPaymentMethod("upi")} disabled={!amount || amount <= 0}>
//                 UPI/QR Code Payment
//               </button>
//               <button className="btn btn-outline-success mx-2" onClick={() => setPaymentMethod("card")} disabled={!amount || amount <= 0}>
//                 Credit/Debit Card
//               </button>
//             </div>
//           )}
//           {paymentMethod !== "none" && (
//             <button
//               className="btn btn-secondary mt-3"
//               onClick={() => {
//                 setPaymentMethod("none");
//                 setShowQRCode(false);
//               }}
//               disabled={isProcessing}
//             >
//               Reset Payment Option
//             </button>
//           )}
//         </div>
//         <div className="card-footer text-muted">Happy Gaming!</div>
//       </div>
//     </div>
//   );
// };

// export default Wallet;












import React, { useState, useEffect, useCallback} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
// import io from "socket.io-client";
// const socket = io("http://localhost:5003");


  const Wallet = ({ wallet, setWallet}) => { // , userId , betAmount, setBetAmount, wonAmount, gameStarted 
  const [amount, setAmount] = useState("");
  const [upiID, setUpiID] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("none");
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrPaid, setQrPaid] = useState(false);
  // const [gameWallet, setGameWallet] = useState(wallet);

  // ✅ Fetch Wallet Balance from backend and send to backend (imp)
  const fetchWalletBalance = useCallback(() => {
    // if (!userId) return;
    fetch("http://localhost:5003/api/wallet")  // userId
      .then((response) => response.json())
      .then((data) => { 
        setWallet(data.balance);//) ✅ Set wallet with fetched balance
        // setGameWallet(data.balance); //  setGameWallet
      })
      .catch((error) => console.error("Error fetching wallet:", error));
  }, [setWallet]); // , userId
  
  const updateWalletBalance = useCallback((addAmount) => {
    //addAmount = (amount !== true ? addAmount - setWallet : addAmount);
    if (!addAmount || isNaN(addAmount)) {
      console.error("Invalid amount:", addAmount);
      return;
    }
    addAmount= addAmount* -1;
    fetch("http://localhost:5003/api/wallet/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: addAmount}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setWallet(data.newBalance); // Update wallet with the new backend balance  // setGameWallet(data.newBalance);
          fetchWalletBalance(); // ✅ Ensure latest balance is fetched after update  // alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
        } else {
          alert("Error updating wallet balance.");
        }
      })
      .catch((error) => console.error("Error updating wallet:", error));
  }, [setWallet, fetchWalletBalance]); // remove amount // , fetchWalletBalance

  // ✅ Fetch wallet balance on component mount
  useEffect(() => {
    fetchWalletBalance();  // fetchWalletBalance()
  }, [fetchWalletBalance]); // fetchWalletBalance
 
  // ✅ Event listener to catch wallet changes from App.js
  // useEffect(() => {
  //   const handleWalletUpdate = (event) => {
  //     const updatedWallet = event.detail.wallet;
  //     setWallet(updatedWallet);
  //     updateWalletBalance(updatedWallet);  // Send updated wallet to backend
  //   };

  //   window.addEventListener("walletUpdated", handleWalletUpdate);

  //   return () => {
  //     window.removeEventListener("walletUpdated", handleWalletUpdate);
  //   };
  // }, [setWallet, updateWalletBalance]);

  const handleUPIPayment = (useScanner = false) => {
    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (useScanner) {
      setShowQRCode(true);
      setQrPaid(false);
      return;
    }

    if (!upiID || (!upiID.includes("@okhdfcbank") && !upiID.includes("@upi"))) {
      alert("Please enter a valid UPI ID.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      // setWallet(wallet + addAmount);
      updateWalletBalance(addAmount);
      setAmount("");
      setUpiID("");
      setIsProcessing(false);
      setPaymentMethod("none");
      alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
    }, 3000);
  };

  const handleCardPayment = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      // setWallet(wallet + addAmount);
      updateWalletBalance(addAmount);
      setAmount("");
      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "" });
      setIsProcessing(false);
      setPaymentMethod("none");
      alert(`Payment of Rs. ${addAmount} successful! Wallet updated.`);
    }, 3000);
  };

  const confirmQRPayment = () => {
    if (!qrPaid) {
      alert("Please complete the payment before confirming.");
      return;
    }
    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) return;
    // setWallet(wallet + addAmount);
    updateWalletBalance(addAmount);
    setAmount("");
    setShowQRCode(false);
    setQrPaid(false);
    alert(`QR Payment of Rs. ${addAmount} confirmed! Wallet updated.`);
  };

  const createPayPalOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5003/api/paypal/create-order", { amount }); // balance
  
     // if (response.data.id) {
        const approvalUrl = response.data.links.find(link => link.rel === "approve")?.href;
  
        if (approvalUrl) {
          alert("PayPal Order Created! Redirecting to PayPal...");
          window.location.href = approvalUrl; // Redirect user to PayPal
        } else {
          alert("Approval URL not found. Please try again.");
        }
      //} else {
        //alert("Failed to create PayPal order");
      //}
    } catch (error) {
      console.error("❌ PayPal Order Error:", error);
      alert("Failed to create PayPal order");
    }
  };
  
  const capturePayPalOrder = async (orderId) => {
    try {
      const response = await axios.post("http://localhost:5003/api/paypal/capture-order", {
        orderId,
        // userId,
      });
  
      if (response.data.success) {
        alert(`Payment Successful! New Wallet Balance: $${response.data.newBalance}`);
      } else {
        alert("Payment capture failed.");
      }
    } catch (error) {
      console.error("❌ Capture Order Error:", error);
      alert("Failed to capture PayPal order.");
    }
  };  

  return (
    <div className="container mt-5 pb-5">
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3>Game Wallet</h3>
        </div>
        <div className="card-body">
          {isProcessing && <p className="text-warning">Processing payment...</p>}
          <h5 className="card-title">Your Wallet Balance: Rs. {Number(wallet.toFixed(2))}</h5> {/* .toFixed(2) */}
          <div className="form-group">
            <label className="mt-3">Add Money:</label><input type="number" className="form-control mt-2" placeholder="Enter amount" min={1} value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          {showQRCode && (
            <div className="mt-3">
              <h6>Scan the QR Code to pay Rs. {amount}:</h6>
              <QRCodeCanvas value={`upi://pay?pa=rishibaranwal22@okhdfcbank&am=${amount}`} size={150} /><br/>
              <button className="btn btn-success mt-3" onClick={() => setQrPaid(true)}>I've Paid</button> &nbsp;
              <button className="btn btn-primary mt-3" onClick={  confirmQRPayment } disabled={!qrPaid || !amount || amount <= 0}>Confirm Payment</button> {/* () => { updateWalletBalance(parseFloat(amount)); confirmQRPayment(); } // ✅ Calls QR confirmation logic // ✅ Ensures correct amount update */}
            </div>
          )}

          {paymentMethod === "upi" && !showQRCode && (
            <div className="form-group mt-3">
              <input type="text" className="form-control mt-2" placeholder="Enter your UPI ID (e.g., user@upi)" value={upiID} onChange={(e) => setUpiID(e.target.value)} />
              <button className="btn btn-primary mt-3" onClick={() => handleUPIPayment(false)} disabled={!amount || amount <= 0}>Pay with UPI</button>
              <button className="btn btn-warning mt-3 mx-2" onClick={() => handleUPIPayment(true)} disabled={!amount || amount <= 0}>Pay via QR Scanner</button>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="form-group mt-3">
              <label>Card Details:</label>
              <input type="text" className="form-control mt-2" placeholder="Card Number" value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
              <input type="text" className="form-control mt-2" placeholder="Expiry Date (MM/YY)" value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
              <input type="text" className="form-control mt-2" placeholder="CVV" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
              <button className="btn btn-primary mt-3" onClick={handleCardPayment} disabled={!amount || amount <= 0}>Pay with Card</button>
            </div>
          )}

           {paymentMethod === "none" && !showQRCode && (
            <div className="mt-3">
              <button className="btn btn-outline-primary mx-2" onClick={() => setPaymentMethod("upi")} disabled={!amount || amount <= 0}>
                UPI/QR Code Payment
              </button>
              <button className="btn btn-outline-success mx-2" onClick={() => setPaymentMethod("card")} disabled={!amount || amount <= 0}>
                Credit/Debit Card
              </button>
              <button className="btn btn-outline-info mx-2" onClick={async () => {await createPayPalOrder(); capturePayPalOrder(); } } disabled={!amount || amount <= 0}>
                Pay with PayPal
              </button> 
            </div>
          )}
          {paymentMethod !== "none" && (
            <button
              className="btn btn-secondary mt-3"
              onClick={() => {
                setPaymentMethod("none");
                setShowQRCode(false);
              }}
              disabled={isProcessing}
            >
              Reset Payment Option
            </button>
          )}
        </div>
        <div className="card-footer text-muted">Happy Gaming!</div>
      </div>
    </div>
  );
};

export default Wallet;




// const createPayPalOrder = async () => {
//   try {
//     const response = await axios.post("http://localhost:5003/api/paypal/create-order", { amount }); // balance

//    // if (response.data.id) {
//       const approvalUrl = response.data.links.find(link => link.rel === "approve")?.href;

//       if (approvalUrl) {
//         alert("PayPal Order Created! Redirecting to PayPal...");
//         window.location.href = approvalUrl; // Redirect user to PayPal
//       } else {
//         alert("Approval URL not found. Please try again.");
//       }
//     //} else {
//       //alert("Failed to create PayPal order");
//     //}
//   } catch (error) {
//     console.error("❌ PayPal Order Error:", error);
//     alert("Failed to create PayPal order");
//   }
// };

// const capturePayPalOrder = async (orderId) => {
//   try {
//     const response = await axios.post("http://localhost:5003/api/paypal/capture-order", {
//       orderId,
//       userId,
//     });

//     if (response.data.success) {
//       alert(`Payment Successful! New Wallet Balance: $${response.data.newBalance}`);
//     } else {
//       alert("Payment capture failed.");
//     }
//   } catch (error) {
//     console.error("❌ Capture Order Error:", error);
//     alert("Failed to capture PayPal order.");
//   }
// };  

//  <button className="btn btn-outline-info mx-2" onClick={async () => {await createPayPalOrder(); capturePayPalOrder(); } } disabled={!amount || amount <= 0}>
//                 Pay with PayPal
//               </button> 