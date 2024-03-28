// components/job/JobCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <li>
    <h3>{job.title}</h3>
    <p>{job.description}</p>
    <p>Last updated: {job.lastUpdated}</p>
    <Link to={`/job/${job.id}`}>Apply Now</Link>
  </li>
);

export default JobCard;
