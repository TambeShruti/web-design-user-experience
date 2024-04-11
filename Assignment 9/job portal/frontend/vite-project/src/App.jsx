import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Store";
import Home from "./pages/HomePage";
import Login from "./components/Login";
import AboutPage from "./pages/AboutPage";
import JobListings from "./pages/JobListing";
import FetchImages from "./components/DisplayImages";
import AddJobPage from "./components/AddJobPage";
import UserPage from "./components/UserPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/company" element={<FetchImages />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/addjob" element={<AddJobPage />} />
            <Route path="/users" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
