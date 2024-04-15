import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { viewUsers } from "../reducers/userReducer";
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

const UsersPage = ({ users, viewUsers }) => {
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/getAll"); // Assuming your endpoint is /api/users
        console.log(response);
        // setUsers(response.data);
        viewUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [viewUsers]);

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
const mapStateToProps = (state) => ({
  users: state.user.users,
});

const mapDispatchToProps = {
  viewUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
