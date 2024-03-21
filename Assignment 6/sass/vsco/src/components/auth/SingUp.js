import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to store form submission status
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend API for signup
      const response = await axios.post("/user/create", formData);
      console.log("Signup successful:", response.data);
      // Reset form data and set submission status to true
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSubmitted(true);
      console.log("hellp");
    } catch (error) {
      // Check if there's a specific error response from the server
      if (error.response) {
        console.error("Signup failed with status:", error.response.status);
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
      <h2>Signup</h2>
      {submitted ? (
        <p>Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
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
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
