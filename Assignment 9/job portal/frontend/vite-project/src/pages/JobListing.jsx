import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import jobPosts from "../model/jobPosts";
import Header from "../components/Header";
const JobListings = () => {
  const imageStyles = {
    marginBottom: "20px",
  };
  return (
    <div style={{ marginTop: "50px", marginLeft: "400px" }}>
      <Header />
      <img
        src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_about-us-hero-image_611x475-2.png"
        alt="Background"
        style={imageStyles}
      />
      {jobPosts.map((job) => (
        <Card
          key={job.id}
          variant="outlined"
          style={{
            marginBottom: "20px",
            backgroundColor: "#e8f5e9",
            width: "600px",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {job.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {job.lastUpdated}
            </Typography>
            <Typography variant="body2" component="p">
              Description: {job.description}
            </Typography>
            <Typography variant="body2" component="p">
              Required Skills: {job.requiredSkills.join(", ")}
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
  );
};

export default JobListings;
