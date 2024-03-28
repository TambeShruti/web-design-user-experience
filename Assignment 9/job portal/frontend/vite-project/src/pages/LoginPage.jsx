// LoginPage.jsx
import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";

const LoginPage = () => {
  // Determine if the user is logged in based on the presence of the authentication token
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="login-page">
      {isLoggedIn ? ( // If the user is logged in, show the Logout component
        <Logout />
      ) : (
        // If the user is not logged in, show the Login component
        <Login />
      )}
    </div>
  );
};

export default LoginPage;
