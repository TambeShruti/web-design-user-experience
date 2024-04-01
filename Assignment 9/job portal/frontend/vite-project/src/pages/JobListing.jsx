import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import axios from "axios";
import Header from "../components/Header";

const JobListings = () => {
  const imageStyles = {
    marginBottom: "20px",
  };
  // State for jobs data
  const [jobListings, setJobListings] = useState([]);

  // Function to fetch job listings data from backend
  const fetchJobListings = async () => {
    try {
      const response = await axios.get("/api/getAllJobs");
      console.log(response);
      setJobListings(response.data); // Assuming the response is an array of job objects
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  // useEffect to fetch job listings data when component mounts
  useEffect(() => {
    fetchJobListings();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "50px", marginLeft: "400px" }}>
        <img
          src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_about-us-hero-image_611x475-2.png"
          alt="Background"
          style={imageStyles}
        />
        {jobListings.map((job) => (
          <Card
            key={job.id} // Assuming each job object has a unique id
            variant="outlined"
            style={{
              marginBottom: "20px",
              backgroundColor: "#e8f5e9",
              width: "600px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {job.jobTitle} at {job.companyName}
              </Typography>
              <Typography variant="body2" component="p">
                Description: {job.description}
              </Typography>
              <Typography variant="body2" component="p">
                Salary: {job.salary}
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4caf50", color: "white" }}
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Button>
            </CardContent>
            {/* Optional: Add Divider for visual separation */}
            <Divider />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
