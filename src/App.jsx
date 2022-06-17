import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fruta from "./views/Fruta/Fruta";
import Login from "./views/login/login";
import Home from "./views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./views/signup/signup";
import Links from "./components/Links/Links";
import User from  '../src/utilities/userTable.json'
import { useEffect } from "react";
console.log (User);

function App() {
 useEffect(() => {
  localStorage.setItem("user", JSON.stringify(User))
}, []);

console.log(localStorage.getItem);

  return (
    <Router>
      <div className="App">
        <Links />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/:name" element={<Fruta/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
