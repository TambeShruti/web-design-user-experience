// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Login from "./components/Login";
import AboutPage from "./pages/AboutPage";
import JobListings from "./pages/JobListing";
import FetchImages from "./components/DisplayImages";

import AdminPage from "./pages/AdminPage";
const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/company" element={<FetchImages />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
