// pages/Home.jsx
import React from "react";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import FeaturedJobs from "../components/FeaturedJobs";
import CategoryComponent from "../components/Category";
import ImageWithTextOverlay from "../components/ImageContainer";
import JobDescription from "../components/JobDescription";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "75%",
    marginTop: "20px",
  };

  return (
    <div className="home" style={containerStyle}>
      <SearchBar />
      <h1>Glassdoor</h1>
      <ImageWithTextOverlay />
      <div style={contentContainerStyle}>
        <div style={{ width: "48%" }}>
          {" "}
          <FeaturedJobs />
        </div>

        <div style={{ width: "48%", marginTop: "70px" }}>
          {" "}
          <JobDescription />
        </div>
      </div>
      <CategoryComponent />
      <Footer />
    </div>
  );
};

export default Home;
