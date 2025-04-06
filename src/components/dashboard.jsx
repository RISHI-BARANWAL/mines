// npm run dev
import React, {useState} from "react"; // , { useState }
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Animation from "./animation";
import '../App.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; // Routes
// import {useNavigate} from "react-router-dom"

const Dashboard = () => {
	const [showAnimation, setShowAnimation] = useState(false);

  return (
	<Router>
      <nav className="nav">
        <Link to="#" onMouseEnter={() => setShowAnimation(true)} onMouseLeave={() => setShowAnimation(false)}> {/* /animaton */}
          <i className="bi bi-person-circle user"></i>
        </Link>
      </nav>

	  {showAnimation && <div onMouseEnter={() => setShowAnimation(true)} onMouseLeave={() => setShowAnimation(false)}><Animation onClose={() => setShowAnimation(false)} /></div>}

      <Switch> {/* Routes */}
	      {/* <Route path="/animation" element={<Animation />} /> */}
        <Route path="/animation" component={Animation} />
      </Switch>

    </Router>

  )
}


export default Dashboard;
