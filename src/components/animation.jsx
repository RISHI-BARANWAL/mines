import React from 'react'; // , {useState}
import '../App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from './profile';
// import Animate from "./animation"
// import { useNavigate } from 'react-router-dom';
// const navigate=useNavigate();


const Animation = ({ onClose }) => {
    // const [showProfile, setShowProfile] = useState(false);

  return (
    <div className='animate'>
      
      {/* <!-- From Uiverse.io by csemszepp -->  */}

		<div className="socket">
			{/* <div className="gel center-gel">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div> */}
            <div className="gel center-gel profile"> {/* profile */}
		    <img src='https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?w=1480' height={'40px'} width={'40px'} alt=''></img>
	        </div>
			<div className="gel c1 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c2 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c3 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c4 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c5 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c6 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c7 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c8 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c9 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c10 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c11 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c12 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c13 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c14 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c15 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c16 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c17 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c18 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c19 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c20 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c21 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c22 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c23 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c24 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c25 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c26 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c28 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c29 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c30 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c31 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c32 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c33 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c34 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c35 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c36 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c37 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
		</div>

        {/* <div className="profile">
		    <img src='https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?w=1480' height={'40px'} width={'40px'} alt=''></img>
	    </div><br/><br/> */}
        {/* <h1>WELCOME RB</h1> */}
        <div className="card-form-container">
            <form className="card-form">
                <h2>WELCOME DEAR <span role="img" aria-label='isOpen'>😊</span></h2>  {/* for emoji */} 
                {/* <input type="text" placeholder="Your Name" /> */}
                {/* <input type="email" placeholder="Your Email" /> */}
                {/* <button  onClick={handleClick}><Animate /></button> */}
                {/* <button onClick={() => (element={<Profile />})}>Profile</button> window.location.href = "/Profile" */}
                {/* {showProfile ? (<Profile /> ) : (<button onClick={() => setShowProfile(true)}>Profile</button> )} // Renders Profile component */}
                {/* <button onClick={() => window.open("/dashboard.html")}>Dasboard</button> */}
                <button  onClick={(e) => {e.preventDefault(); window.location.href ="/profile.html"}}>Profile</button> {/* , "_blank" */}
                <button onClick={(e) => {e.preventDefault(); window.location.href = "/dashboard.html"}}>Game</button>
                <button type="submit">Settings</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    </div>
  )
}



export default Animation
