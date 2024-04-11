import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/getAll"); // Assuming your endpoint is /api/users
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <h1>Users Page</h1>
      <TableContainer
        component={Paper}
        style={{ width: "80%", margin: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ background: "green" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Full Name
                </Typography>
              </TableCell>
              <TableCell style={{ background: "green" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Email
                </Typography>
              </TableCell>
              <TableCell style={{ background: "green" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Type
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersPage;
