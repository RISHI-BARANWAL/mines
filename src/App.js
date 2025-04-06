// Mines Game (payment, multiple, animation, exploded 4)
// import './App.css';
// import React, { useState } from 'react'; // hook imported
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Wallet from './wallet';

// const rows = 5;
// const cols = 5;
// const totalCells = rows * cols;

// const generateBoard = (mineCount) => {
//   let board = new Array(totalCells).fill('diamond');
//   let minePositions = new Set();

//   while (minePositions.size < mineCount) {
//     minePositions.add(Math.floor(Math.random() * totalCells));
//   }

//   minePositions.forEach((pos) => (board[pos] = 'mine'));
//   return board;
// };

// const getBetMultipliers = (mineCount) => {
//   // This function returns different bet multipliers depending on the number of mines selected.
//   switch (mineCount) {
//     case 1:
//       return [1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.10, 1.11, 1.12, 1.14, 1.6, 1.19, 1.23, 1.28, 1.34, 1.44, 1.59, 1.82, 2.24, 3.06, 5.12, 23.75];
//     case 2:
//       return [1.03, 1.12, 1.23, 1.35, 1.5, 1.66, 1.86, 2.09, 2.37, 2.71, 3.13, 3.65, 4.31, 5.18, 6.33, 7.91, 10.17, 13.57, 19, 28.5, 47.5, 95, 285];
//     case 3:
//       return [1.07, 1.23, 1.41, 1.64, 2.91, 2.25, 2.67, 3.21, 3.9, 4.8, 6, 7.63, 9.93, 13.24, 18.2, 16.01, 39.01, 62.42, 109.25, 218.5, 546.25, 2190];
//     case 4:
//       return [1.13, 1.35, 1.64, 2, 2.48, 3.1, 3.92, 5.04, 6.6, 8.8, 12, 16.8, 24.27, 36.41, 57.22, 95.37, 171.67, 343.35, 801.6, 2400, 12020];
//     case 5:
//       return [1.18, 1.5, 1.91, 2.48, 3.25, 4.34, 5.89, 8.15, 11.55, 16.8, 25.21, 39.21, 63.72, 109.25, 200.29, 400.58, 901.58, 901.31, 2400, 8410, 50470];
//     case 6:
//       return [1.25, 1.66, 2.25, 3.1, 4.34, 6.2, 9.06, 13.59, 21, 33.61, 56.02, 98.04, 182.08, 364.16, 801.17, 2000, 6001, 24004, 168000];
//     case 7:
//       return [1.31, 1.86, 2.67, 3.92, 5.89, 9.06, 14.34, 23.48, 39.91, 70.96, 133.06, 266.12, 576.59, 1380, 3810, 12690, 57080, 457000];
//     case 8:
//       return [1.39, 2.09, 3.21, 5.04, 8.15, 13.59, 23.48, 42.26, 79.83, 159.67, 342.15, 798.36, 2080, 6230, 22830, 114000, 1030000];
//     case 9:
//       return [1.48, 2.37, 3.9, 6.6, 11.5, 21, 39.91, 79.83, 169.65, 387.77, 969.44, 2710, 8820, 35290, 194000, 1940000];
//     case 10:
//       return [1.58, 2.71, 4.8, 8.8, 16.8, 33.61, 70.96, 159.67, 387.77, 1030, 3100, 10860, 47050, 282000, 3110000];
//     case 11:
//       return [1.69, 3.13, 6, 12, 25.21, 56.02, 133.06, 342.15, 969.44, 3100, 11630, 54290, 353000, 4230000];
//     case 12:
//       return [1.82, 3.65, 7.63, 16.8, 39.21, 98.04, 266.12, 798.36, 2710, 10860, 54290, 380000, 4940000];
//     case 13:
//       return [1.97, 4.31, 9.93, 24.27, 63.72, 182.08, 576.59, 2080, 8820, 47050, 353000, 4940000 ];
//     case 14:
//       return [2.15, 5.18, 13.24, 36.41, 109.25, 364.16, 1380, 6230, 35290, 282000, 423000];
//     case 15:
//       return [2.37, 6.33, 18.2, 57.22, 200.29, 801.16, 3810, 22830, 193000, 3100000];
//     case 16:
//       return [2.63, 7.91, 26.01, 95.37, 413, 2000, 12690, 114000, 1940000];
//     case 17:
//       return [2.96, 10.17, 39.01, 171.67, 901.37, 6010, 57080, 1030000];
//     case 18:
//       return [3.39, 13.57, 62.42, 343.35, 2400, 24030, 457000];
//     case 19:
//       return [3.95, 19, 109.25, 801.16, 8410, 168000];
//     case 20:
//       return [4.75, 28.50, 218.5, 2400, 50470];
//     case 21:
//       return [5.93, 47.5, 546.25, 12020];
//     case 22:
//       return [7.91, 95, 2190];
//     case 23:
//       return [11.87, 285];
//     case 24:
//       return [230.75];
//     default:
//       return [1.0]; // Default case if the mine count is out of range
//   }
// };

// export default function MinesGame() {
//   const [wallet, setWallet] = useState(0);
//   const [bet, setBet] = useState(1);
//   const [mineCount, setMineCount] = useState(4);
//   const [board, setBoard] = useState(generateBoard(mineCount));
//   const [revealed, setRevealed] = useState(new Array(totalCells).fill(false));
//   const [hits, setHits] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [stopPressed, setStopPressed] = useState(false);
//   const [wonAmount, setWonAmount] = useState(0);
//   const [exploded, setExploded] = useState(null); // Track the exploded bomb

//   const handleClick = (index) => {
//     if (!gameStarted) {
//       alert('Please click "START/STOP" to begin or end the game.');
//       return;
//     }

//     if (wallet === 0) {
//       alert('Your wallet is empty! Please scroll down & add money to start playing.');
//       return;
//     }

//     if (gameOver || revealed[index]) return;

//     const newRevealed = [...revealed];
//     newRevealed[index] = true;
//     setRevealed(newRevealed);

//     if (board[index] === 'mine') {
//       setGameOver(true);
//       // setWallet(wallet - bet);  //deduct bet amount when game starts 374
//       setWonAmount(0);
//       setExploded(index); // Trigger explosion animation
//     } else {
//       const newHits = hits + 1;
//       setHits(newHits);

//       const multipliers = getBetMultipliers(mineCount);
//       const multiplier = multipliers[Math.min(newHits - 1, multipliers.length - 1)];
//       const currentWonAmount = bet * multiplier;
//       setWonAmount(currentWonAmount);

//       const diamondsLeft = board.filter((cell, index) => cell === 'diamond' && !newRevealed[index]).length;
//       if (diamondsLeft === 0) {

//         alert('Congratulations! You found all the diamonds!'); // working
//         if (gameOver || revealed[index]) return;
//         // const newRevealed = [...revealed];
//         // newRevealed[index] = true; 
//         setGameOver(true);
//         setRevealed(board.map(cell => cell === 'mine' || cell === 'diamond'));

//       } //.....
//     }
//   };

//   const toggleGame = () => {
//     if (!gameStarted) {
//       if (wallet === 0) {
//         alert('Your wallet is empty! Please scroll down & add money to start playing.');
//         return;
//       }
//       if (bet > wallet) {
//         alert("Insufficient wallet balance! Please lower your bet amount.");
//         return;
//       }
//       setBoard(generateBoard(mineCount));
//       setRevealed(new Array(totalCells).fill(false));
//       setHits(0);
//       setGameOver(false);
//       setGameStarted(true);
//       setStopPressed(false);
//       setWonAmount(0);
//       setExploded(null);
//       // Deduct bet amount when the game starts
//       setWallet((prevWallet) => prevWallet - bet);  //deduct bet amount on bomb explode 341
//     } else {
//       setWallet(wallet + wonAmount);
//       alert(`You stopped the game and won $${wonAmount.toFixed(2)}!`);
//       setStopPressed(true);
//       setGameOver(true);
//       setGameStarted(false);
//       setBet(1); // **Reset bet value to 0 when the game is reset**
//     }
//   };

//   const resetGame = () => {
//     setBoard(generateBoard(mineCount));
//     setRevealed(new Array(totalCells).fill(false));
//     setHits(0);
//     setGameOver(false);
//     setGameStarted(false);
//     setStopPressed(false);
//     setWonAmount(0);
//     setExploded(null);
//     setBet(1); // **Reset bet value to 0 when the game is reset**
//   };

//   const handleBetChange = (value) => {
//     if (wallet === 0) {
//       alert('Your wallet is empty! Please scroll down & add money to start playing.');
//       return;
//     }

//     if (value >= 1 && value <= wallet) {
//       setBet(value);
//     }
//   };

//   return (
//     <div className="container cont text-center mt-0 pt-3 bg-dark">
//       <h1 className="mb-3 text-success">Mines Game</h1>
//       <div className="d-grid gap-2">
//         <div
//           className="grid-container mx-auto"
//           style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '5px' }}
//         >
//           {board.map((cell, index) => (
//             <button
//               key={index}
//               className={`btn ${
//                 revealed[index] || gameOver
//                   ? cell === 'mine'
//                     ? exploded === index
//                       ? 'btn-danger exploded' // Add explosion class
//                       : 'btn-danger'
//                     : 'btn-success'
//                   : 'btn-primary'
//               }`}
//               onClick={() => handleClick(index)}
//               disabled={revealed[index] || gameOver}
//               style={{ height: '80px', width: '80px' }}
//             >
//               {(revealed[index] || gameOver) ? <span style={{fontSize:"3rem"}}>{cell === 'mine' ? '💣' : '💎'}</span> : <span style={{fontSize:"3rem"}}>?</span>}  {/* "?" */}
//             </button>
//           ))}
//         </div>
//       </div>

//       <p className='text-info'>Please click "START/STOP" to begin or end the game.</p>
//       <p className="text-warning">
//         Multiplier: x{hits > 0 ? getBetMultipliers(mineCount)[hits - 1] : 1.0} &nbsp;|&nbsp; Won: ${wonAmount.toFixed(2)} &nbsp;|&nbsp; Wallet: ${wallet.toFixed(2)}
//       </p>
//       <p className='text-warning'>Please Select Bet Amount:</p>

//       <div className="input-group mb-2 justify-content-center">
//         <input
//           type="number"
//           className="form-control w-25"
//           min="1"
//           max={wallet}
//           value={bet}
//           onChange={(e) => handleBetChange(Number(e.target.value))}
//         />
//         <button
//           className="btn btn-primary mx-3"
//           onClick={() => {
//             if (gameStarted && !stopPressed) {
//               alert("Please complete the current game first by pressing STOP.");
//               return;
//             }
//             if (wallet === 0) {
//               alert("Your wallet is empty! Please scroll down & add money to start playing.");
//               return;
//             }
//             handleBetChange(Math.floor(bet / 2));
//           }}
//         >
//           1/2
//         </button>
//         <button
//           className="btn btn-primary mx-2"
//           onClick={() => {
//             if (gameStarted && !stopPressed) {
//               alert("Please complete the current game first by pressing STOP.");
//               return;
//             }
//             if (wallet === 0) {
//               alert("Your wallet is empty! Please scroll down & add money to start playing.");
//               return;
//             }
//             handleBetChange(Math.min(bet * 2, wallet).toFixed(2));
//           }}
//         >
//           2x
//         </button>
//         <button className="btn btn-primary mx-2" onClick={toggleGame}>
//           {gameStarted ? 'STOP' : 'START'}
//         </button>
//         <button className="btn btn-primary mx-2" onClick={resetGame} disabled={!gameOver}>
//           RESET
//         </button>
//       </div>

//       <div className="form-group mt-3 text-warning">
//         <label htmlFor="mineCountSelect">Select Mines:</label>
//         <select
//           id="mineCountSelect"
//           className="form-select w-25 mx-auto m-3"
//           value={mineCount}
//           onChange={(e) => setMineCount(Number(e.target.value))}
//         >
//           {[...Array(24).keys()].map((num) => (
//             <option key={num + 1} value={num + 1}>
//               {num + 1} Mine{num > 0 ? "s" : ""}
//             </option>
//           ))}
//         </select>
//       </div>

//       <Wallet wallet={wallet} setWallet={setWallet} /> {/* calls wallet component */}

//     </div>
//   );
// }





//Mines Game (payment, animation, exploded 4, responsive, sound)
import './App.css';
import React, { useState, useCallback, useEffect } from 'react'; // hook imported , useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import Wallet from './wallet';

import diamondSound from './sounds/diamond.mp3';
import mineSound from './sounds/mine.mp3';

import Dashboard from './components/dashboard';
// import PaymentSuccess from './components/PaymentSuccess';
// import io from 'socket.io';

const rows = 5;
const cols = 5;
const totalCells = rows * cols;

const generateBoard = (mineCount) => {
  let board = new Array(totalCells).fill('diamond');
  let minePositions = new Set();

  while (minePositions.size < mineCount) {
    minePositions.add(Math.floor(Math.random() * totalCells));
  }

  minePositions.forEach((pos) => (board[pos] = 'mine'));
  return board;
};

const getBetMultipliers = (mineCount) => {

  // This function returns different bet multipliers depending on the number of mines selected.
  switch (mineCount) {
    case 1:
      return [1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.10, 1.11, 1.12, 1.14, 1.6, 1.19, 1.23, 1.28, 1.34, 1.44, 1.59, 1.82, 2.24, 3.06, 5.12, 23.75];
    case 2:
      return [1.03, 1.12, 1.23, 1.35, 1.5, 1.66, 1.86, 2.09, 2.37, 2.71, 3.13, 3.65, 4.31, 5.18, 6.33, 7.91, 10.17, 13.57, 19, 28.5, 47.5, 95, 285];
    case 3:
      return [1.07, 1.23, 1.41, 1.64, 2.91, 2.25, 2.67, 3.21, 3.9, 4.8, 6, 7.63, 9.93, 13.24, 18.2, 16.01, 39.01, 62.42, 109.25, 218.5, 546.25, 2190];
    case 4:
      return [1.13, 1.35, 1.64, 2, 2.48, 3.1, 3.92, 5.04, 6.6, 8.8, 12, 16.8, 24.27, 36.41, 57.22, 95.37, 171.67, 343.35, 801.6, 2400, 12020];
    case 5:
      return [1.18, 1.5, 1.91, 2.48, 3.25, 4.34, 5.89, 8.15, 11.55, 16.8, 25.21, 39.21, 63.72, 109.25, 200.29, 400.58, 901.58, 901.31, 2400, 8410, 50470];
    case 6:
      return [1.25, 1.66, 2.25, 3.1, 4.34, 6.2, 9.06, 13.59, 21, 33.61, 56.02, 98.04, 182.08, 364.16, 801.17, 2000, 6001, 24004, 168000];
    case 7:
      return [1.31, 1.86, 2.67, 3.92, 5.89, 9.06, 14.34, 23.48, 39.91, 70.96, 133.06, 266.12, 576.59, 1380, 3810, 12690, 57080, 457000];
    case 8:
      return [1.39, 2.09, 3.21, 5.04, 8.15, 13.59, 23.48, 42.26, 79.83, 159.67, 342.15, 798.36, 2080, 6230, 22830, 114000, 1030000];
    case 9:
      return [1.48, 2.37, 3.9, 6.6, 11.5, 21, 39.91, 79.83, 169.65, 387.77, 969.44, 2710, 8820, 35290, 194000, 1940000];
    case 10:
      return [1.58, 2.71, 4.8, 8.8, 16.8, 33.61, 70.96, 159.67, 387.77, 1030, 3100, 10860, 47050, 282000, 3110000];
    case 11:
      return [1.69, 3.13, 6, 12, 25.21, 56.02, 133.06, 342.15, 969.44, 3100, 11630, 54290, 353000, 4230000];
    case 12:
      return [1.82, 3.65, 7.63, 16.8, 39.21, 98.04, 266.12, 798.36, 2710, 10860, 54290, 380000, 4940000];
    case 13:
      return [1.97, 4.31, 9.93, 24.27, 63.72, 182.08, 576.59, 2080, 8820, 47050, 353000, 4940000 ];
    case 14:
      return [2.15, 5.18, 13.24, 36.41, 109.25, 364.16, 1380, 6230, 35290, 282000, 423000];
    case 15:
      return [2.37, 6.33, 18.2, 57.22, 200.29, 801.16, 3810, 22830, 193000, 3100000];
    case 16:
      return [2.63, 7.91, 26.01, 95.37, 413, 2000, 12690, 114000, 1940000];
    case 17:
      return [2.96, 10.17, 39.01, 171.67, 901.37, 6010, 57080, 1030000];
    case 18:
      return [3.39, 13.57, 62.42, 343.35, 2400, 24030, 457000];
    case 19:
      return [3.95, 19, 109.25, 801.16, 8410, 168000];
    case 20:
      return [4.75, 28.50, 218.5, 2400, 50470];
    case 21:
      return [5.93, 47.5, 546.25, 12020];
    case 22:
      return [7.91, 95, 2190];
    case 23:
      return [11.87, 285];
    case 24:
      return [230.75];
    default:
      return [1.0]; // Default case if the mine count is out of range
  }
};

export default function MinesGame() {
  const [wallet, setWallet] = useState(0);
  const [bet, setBet] = useState(1);
  const [mineCount, setMineCount] = useState(4);
  const [board, setBoard] = useState(generateBoard(mineCount));
  const [revealed, setRevealed] = useState(new Array(totalCells).fill(false));
  const [hits, setHits] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [stopPressed, setStopPressed] = useState(false);
  const [wonAmount, setWonAmount] = useState(0);
  const [exploded, setExploded] = useState(null); // Track the exploded bomb
  const [firstClick, setFirstClick] = useState(false);
  // const [userId, setUserId]= useState();

  if ((gameOver || exploded) && !sessionStorage.getItem("refreshed")) {
    sessionStorage.setItem("refreshed", "true");
    window.location.reload();
  }


  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const updateWallet = useCallback((balance) => {
    setWallet(balance);
  }, [setWallet]);

  const handleClick = (index) => {
    if (!gameStarted) {
      alert('Please Add money and click "START/CASHOUT" to begin or end the game.');
      return;
    }

    if (wallet === 0  && !gameStarted) {
      alert('Your wallet is empty! Please scroll down & add money to start playing ok.');
      return;
    }

    if (gameOver || revealed[index]) return;

    if (!firstClick) {
      setFirstClick(true);
    }

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (board[index] === 'mine') {
      playSound(mineSound); // Play mine sound
      setGameOver(true);
      // setWallet(wallet - bet);  //deduct bet amount when game starts 535
      setWonAmount(0);
      setExploded(index); // Trigger explosion animation
      setGameStarted(false);
      setFirstClick(false);
    } else {
      playSound(diamondSound); // Play diamond sound
      const newHits = hits + 1;
      setHits(newHits);

      const multipliers = getBetMultipliers(mineCount);
      const multiplier = multipliers[Math.min(newHits - 1, multipliers.length - 1)];
      const currentWonAmount = bet * multiplier;
      setWonAmount(currentWonAmount);




    // Force mine explosion based on bet amount
    // let forceExplosionTurn = bet > 20 ? 4 : (Math.random() < 0.5 ? 5 : 6);
    let forceExplosionTurn = bet > 30 ? (Math.random() < 0.20 ? 3 : Math.random() < 0.5 ? 4 : 5) : (Math.random() < 0.20 ? 5 : Math.random() < 0.5 ? 6 : 7);


  // If it's time for a forced explosion, replace the clicked diamond with a bomb
  if (hits + 1 === forceExplosionTurn) {
    if (board[index] !== 'mine') {
      // Convert the clicked diamond to a mine
      board[index] = 'mine';
      setGameStarted(false);
      setFirstClick(false);

      // Find another existing mine and turn it into a diamond
      let existingMineIndex = board.findIndex((cell, i) => cell === 'mine' && i !== index);
      if (existingMineIndex !== -1) {
        board[existingMineIndex] = 'diamond'; // Swap mine with diamond
      }
    }

    playSound(mineSound);
    setGameOver(true);
    setWonAmount(0);
    setExploded(index);
    return;
  }
      const diamondsLeft = board.filter((cell, index) => cell === 'diamond' && !newRevealed[index]).length;
      if (diamondsLeft === 0) {
        setGameOver(true);
        setRevealed(board.map(cell => cell==='mine' || cell==='diamond'));
        alert('Congratulations! You found all the diamonds!'); // working 

      } //.....
    }
  };

  const toggleGame = () => {
    if (!gameStarted) {
      if (wallet === 0) {
        alert('Your wallet is empty! Please scroll down & add money to start playing.');
        return;
      }
      if (bet > wallet) {
        alert("Insufficient wallet balance! Please Add more amount.");
        return;
      }
      setBoard(generateBoard(mineCount));
      setRevealed(new Array(totalCells).fill(false));
      setHits(0);
      setGameOver(false);
      setGameStarted(true);
      setStopPressed(false);
      setWonAmount(0);
      setExploded(null);
      setFirstClick(false);
      // setWallet((prevWallet) => prevWallet - bet);

      // if (bet > wallet) {
      //   alert("Insufficient wallet balance! Please Add more amount.");
      //   return;
      // }
      
      // ✅ Deduct bet amount locally nad from backend
      const updatedWallet = wallet - bet ;
      setWallet(updatedWallet);  // Update the frontend wallet immediately
      const negAmt = Math.abs(Number(-bet)); // -Math.abs(Number(bet)
      // if(gameStarted){
      // ✅ Send the updated wallet to the backend
      fetch(`http://localhost:5003/api/wallet/update`, { //
        method: "POST",
        headers: { "Content-Type": "application/json" }, // -wallet // updatedWallet
        body: JSON.stringify({ amount: negAmt })  // Send the updated wallet value to server // Number(-bet * 1)
      }).then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // ✅ Sync frontend wallet with backend balance
            setWallet(data.newBalance);
            console.log(`Wallet updated on server: Rs. ${data.newBalance}`);
          } else {
            // return ;
            // alert("Failed to update wallet on server!");
            console.log("Failed to update wallet on server!");
            console.log(-bet);
          }
        })
        .catch((error) => console.error("Error updating wallet:", error));
      // }

      setBoard(generateBoard(mineCount));
      setRevealed(new Array(totalCells).fill(false));
      setHits(0);
      setGameOver(false);
      setGameStarted(true);
      setStopPressed(false);
      setWonAmount(0);
      setExploded(null);
      setFirstClick(false);
      
      
      
      // Deduct bet amount when the game starts
      // setWallet((prevWallet) => prevWallet - bet);  //deduct bet amount on bomb explode 432
      // When starting the game
    } else {
      //setWallet(wallet + wonAmount); // important line
      // When cashing out
      const updatedWallet = wallet + wonAmount ;
      setWallet(updatedWallet);  // Update the frontend wallet immediately
      
      // ✅ Send the updated wallet to the backend
      fetch(`http://localhost:5003/api/wallet/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // wonAmount or updatedWallet
        body: JSON.stringify({ amount: wonAmount * -1 }),  // Send the updated wallet value to server // wonAmount/2
        // (updatedWallet - updatedWallet/2 - updatedWallet/2)
      }).then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // ✅ Sync frontend wallet with backend balance
            setWallet(data.newBalance);
            console.log(`Wallet updated on server: Rs. ${data.newBalance}`);
          } else {
            alert("Failed to update wallet on server!");
          }
        })
        .catch((error) => console.error("Error updating wallet:", error));
      
      alert(`Game stopped and won $${Number(wonAmount).toFixed(2)}!`);  //.toFixed(2)
      setStopPressed(true);
      setGameOver(true);
      setGameStarted(false);
      setBet(1); // **Reset bet value to 0 when the game is reset**
      setFirstClick(false);
    }
  };

const saveGameResult = useCallback(async (userId, gameName, gameOver, wonAmount, bet) => {
    if (!gameOver) return; // Only save if game is over
  try {
    wonAmount= wonAmount.toFixed(2);
    const result = wonAmount > 0 ? "Win" : "Loss";
    const amt = wonAmount > 0 ? wonAmount : bet; // Choose the correct value

    const newGame = {
        userId,
        name: gameName,
        dateTime: new Date(),  //  .toISOString(),  .toLocaleString(),
        result,
        amt
    };

    const response = await fetch("http://localhost:5003/api/game-history/add", { //  5000
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame)  //stringify parse
    });
    if (!response.ok) {
      console.error("Failed to save game:", response.statusText);
    }

    console.log("Game result saved:", newGame);

  } catch (error) {
    console.error("Error saving game:", error);
  }
  }, []);  // Empty dependency array means it won't change

  // const [Id, setId] = useState(null);
  useEffect(() => {  //localStorage.setItem("userId", "user123");  // ✅ Store userId once when the app loads
    // const id= '0xAB12CD34EF56';
    if (gameOver) {
        saveGameResult( "0xAB12CD34EF56", "Minesweeper", gameOver, wonAmount, bet); // 0xAB12CD34EF56 / userId
    }
  }, [gameOver, bet, wonAmount, saveGameResult, revealed]);
  
  const handleBetChange = (value) => {
	setBoard(generateBoard(mineCount));
  	setRevealed(new Array(totalCells).fill(false));
  	setHits(0);
  	setGameOver(false);
  	setGameStarted(false);
  	setStopPressed(false);
  	setWonAmount(0);
  	setExploded(null);
    if (wallet === 0) {
      alert('Your wallet is empty! Please scroll down & add money to start playing.');
      return;
    }
    if (value >= 1 && value <= wallet) {
      setBet(value);
    }
  };

  return (
    <div>
      <Dashboard />

    <div className="container cont text-center mt-0 pt-3 bg-dark">
      <h1 className="mb-3 text-success">Mines Game</h1>
      <div className="d-grid gap-2">
        <div
          className="grid-container mx-auto"
          style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '5px' }}
        >
          {board.map((cell, index) => (
            <button
              key={index}
              className={`btn ${
                revealed[index] || gameOver
                  ? cell === 'mine'
                    ? exploded === index
                      ? 'btn-danger exploded' 
                      : 'btn-danger'
                    : 'btn-success'
                  : 'btn-primary'
              }`} // Add explosion class
              onClick={() => handleClick(index)}
              disabled={revealed[index] || gameOver}
              style={{ height: '80px', width: '80px' }}
            >
              {(revealed[index] || gameOver) ? <span style={{fontSize:"3rem"}}>{cell === 'mine' ? '💣' : '💎'}</span> : <span style={{fontSize:"3rem"}}>?</span>}  {/* "?" */}
            </button>
          ))}
        </div>
      </div>

      <p className='text-info'>Please click "START/CASHOUT" to begin or end the game.</p>
      <p className="text-warning"> {/* .toFixed(2) .toFixed(2) */}
        Multiplier: x{hits > 0 ? getBetMultipliers(mineCount)[hits - 1] : 1.0} &nbsp;|&nbsp; Won: ${Number(wonAmount).toFixed(2)} &nbsp;|&nbsp; Wallet: ${Number(wallet).toFixed(2)} 
      </p>
      <p className='text-warning'>Please Select Bet Amount:</p>

      <div className="input-group mb-2 justify-content-center mx-auto w-50">
        <input
          type="number"
          className="form-control"
          min="1"
          max={wallet}
          value={bet}
          onChange={(e) => handleBetChange(Number(e.target.value)) }
          disabled={gameStarted}
        />

        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            if (gameStarted && !stopPressed) {
              alert("Please complete the current game first by pressing CASHOUT.");
              return;
            }
            if (wallet === 0) {
              alert("Your wallet is empty! Please scroll down & add money to start playing.");
              return;
            }
            handleBetChange(Math.floor(bet / 2));
          }}
        >
          1/2
        </button>
        <button
          className="btn btn-primary mx-2 two"
          onClick={() => {
            if (gameStarted && !stopPressed) {
              alert("Please complete the current game first by pressing CASHOUT.");
              return;
            }
            if (wallet === 0) {
              alert("Your wallet is empty! Please scroll down & add money to start playing.");
              return;
            }
            handleBetChange(Math.min(bet * 2, Number(wallet).toFixed(2)));  // toFixed(2)
          }}
        >
          2x
        </button> 
        <button className="btn btn-primary mx-2 start" onClick={ toggleGame } disabled={gameStarted && !firstClick} >
          {gameStarted ? 'CASHOUT' : 'START'} 
        </button> 
        {/* <button className="btn btn-primary mx-2" onClick={resetGame} disabled={!gameOver}>
          RESET
        </button> */}
      </div>

      <div className="form-group mt-3 text-warning">
        <label htmlFor="mineCountSelect">Select Mines:</label>
        <select
          id="mineCountSelect"
          className="form-select w-25 mx-auto m-3"
          value={mineCount}
          onChange={(e) => setMineCount(Number(e.target.value))}
        >
          {[...Array(24).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} Mine{num > 0 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/*<Wallet wallet={wallet} setWallet={setWallet} /> */}{/* calls wallet component //  userId={Id} */}
      return <Wallet wallet={wallet} setWallet={updateWallet} />; 
      {/* <PaymentSuccess/> */}
    </div>
    </div>
  );
}

