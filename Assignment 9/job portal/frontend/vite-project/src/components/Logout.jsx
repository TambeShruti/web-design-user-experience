// Logout.jsx
import React from "react";

const Logout = () => {
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("token");
    // Redirect or update UI
    window.location.href = "/login"; // Redirect to login page
    // You can also update the UI to reflect that the user is logged out
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
