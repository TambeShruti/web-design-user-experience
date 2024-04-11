import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleAddJobClick = () => {
    navigate("/addjob"); // Navigate to Add Job page
  };
  const handleViewUsersClick = () => {
    navigate("/users"); // Navigate to Users page
  };

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Admin Page</h1>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "300px",
            margin: "20px",
            border: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                color: "#333",
                fontSize: "1.5rem",
                marginBottom: "20px",
              }}
            >
              Users
            </Card.Title>
            <Card.Text
              style={{
                color: "#666",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }}
            >
              Registered users will appear here
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "#0caa41", borderColor: "#0caa41" }}
              onClick={handleViewUsersClick}
            >
              View
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "300px",
            margin: "20px",
            border: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                color: "#333",
                fontSize: "1.5rem",
                marginBottom: "20px",
              }}
            >
              Jobs
            </Card.Title>
            <Card.Text
              style={{
                color: "#666",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }}
            >
              Add jobs here
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "#0caa41", borderColor: "#0caa41" }}
              onClick={handleAddJobClick}
            >
              View
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Logout />
    </div>
  );
};

export default AdminPage;
