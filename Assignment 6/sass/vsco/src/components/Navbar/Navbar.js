import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <a href="Explore">
          <span className="simple-icons--vsco"></span>
          <p className="logo-p">VSCO</p>
        </a>
      </div>

      <nav className="navbar">
        <ul className="nav-item">
          <Link to="/Explore">
            <span class="arcticons--cinexplore"></span>
            <li>Explore</li>
          </Link>
          <Link to="/Gallery">
            <span class="healthicons--ui-user-profile-outline"></span>
            <li>Profile</li>
          </Link>
          <Link to="/Studio">
            <span class="fluent--broad-activity-feed-20-regular"></span>
            <li>Studio</li>
          </Link>
        </ul>
      </nav>
      <div className="button-container-header">
        <button className="btn -primary">Sign Up</button>
        <button className="btn -secondary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
