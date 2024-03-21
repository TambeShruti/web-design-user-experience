import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Using useNavigate hook to handle navigation

  const handleSignup = () => {
    navigate("/SignupForm");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/Explore">
          {" "}
          {/* Use Link component for internal navigation */}
          <span className="simple-icons--vsco"></span>
          <p className="logo-p">VSCO</p>
        </Link>
      </div>

      <nav className="navbar">
        <ul className="nav-item">
          <li>
            <Link to="/Explore">
              <span className="arcticons--cinexplore"></span>
              Explore
            </Link>
          </li>
          <li>
            <Link to="/Gallery">
              <span className="healthicons--ui-user-profile-outline"></span>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/Studio">
              <span className="fluent--broad-activity-feed-20-regular"></span>
              Studio
            </Link>
          </li>
        </ul>
      </nav>
      <div className="button-container-header">
        <button className="btn -primary" onClick={handleSignup}>
          Sign Up
        </button>
        <button className="btn -secondary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
