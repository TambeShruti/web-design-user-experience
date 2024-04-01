import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const AddJob = () => {
  // State for form inputs
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  // State for jobs data
  const [jobs, setJobs] = useState([]);

  // Function to fetch jobs data from backend
  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/getAllJobs");
      console.log(response);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // useEffect to fetch jobs data when component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/create/job", {
        companyName,
        jobTitle,
        description,
        salary,
      });
      // Clear form inputs after submission
      setCompanyName("");
      setJobTitle("");
      setDescription("");
      setSalary("");
      // Fetch updated jobs data
      fetchJobs();
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper style={{ padding: "20px" }}>
          <h2>Add Job</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Company Name"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Job Title"
              fullWidth
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Salary"
              fullWidth
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Add Job
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: "20px" }}>
          <h2>Jobs</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.companyName}</TableCell>
                  <TableCell>{job.jobTitle}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddJob;
