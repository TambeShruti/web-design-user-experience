// Login.jsx
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", {
        // Note the '/api' prefix
        email,
        password,
      });
      console.log(response);
      const token = response.data.token;
      // Store the token in local storage or cookies
      localStorage.setItem("token", token);
      // Redirect or handle successful login
      setError("");
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
