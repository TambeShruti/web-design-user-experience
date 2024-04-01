// pages/Home.jsx
import React from "react";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import FeaturedJobs from "../components/FeaturedJobs";
import CategoryComponent from "../components/Category";
import ImageWithTextOverlay from "../components/ImageContainer";
import JobDescription from "../components/JobDescription";
import Header from "../components/Header";

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

  const imgStyle = {
    width: "80%",
    height: "500px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  return (
    <div>
      <Header />
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
        <img
          src="https://blog-consumer.glassdoor.com/site-us/wp-content/uploads/sites/2/di_prod_announcement.png"
          alt="Background"
          style={imgStyle}
        />
        <CategoryComponent />
        <img
          src="https://www.glassdoor.com/employers/app/uploads/sites/2/2020/09/fostering-diversity-inclusion-not-just-an-hr-job-social.png"
          alt="Background"
          style={imgStyle}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
