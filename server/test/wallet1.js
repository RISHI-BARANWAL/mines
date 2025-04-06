// // temperory
// import React from 'react'

// const wallet1 = () => {

//     const handlePayPalPayment = () => {
//         fetch("http://localhost:5003/api/paypal/pay", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             window.location.href = data.links[1].href;  // Redirect to PayPal
//         })
//           .catch((error) => console.error("PayPal Error:", error));
//     };      

//   return (
//     <div>
//         <button className="btn btn-outline-dark mx-2" onClick={handlePayPalPayment} disabled={!amount || amount <= 0}>
//           Pay with PayPal
//         </button>

//     </div>
//   )
// }

// export default wallet1
