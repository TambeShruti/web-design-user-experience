import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend API for login
      const response = await axios.post("/user/login", formData);
      console.log(response.data);
      setFormData({ email: "", password: "" });
      setSubmitted(true);
      if (response.data && response.data.id) {
        // If the response contains user data with an ID, fetch user data
        const userDataResponse = await axios.get(`/user/${response.data.id}`);
        console.log("User data:", userDataResponse.data);
        // You can do something with the user data, such as store it in state or context
      }
    } catch (error) {
      // Check if there's a specific error response from the server
      if (error.response) {
        console.error("Login failed with status:", error.response.status);
        console.error("Error message:", error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error during request setup:", error.message);
      }
      // Optionally, you can set an error state to display an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {submitted ? (
        <p>Login successful! Redirecting...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
