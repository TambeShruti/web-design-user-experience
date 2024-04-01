import React, { useEffect, useState } from "react";
import axios from "axios";
import Logout from "../components/Logout";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/getAll");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const imgStyle = {
    width: "80%",
    height: "500px",
    marginTop: "20px",
    marginBottom: "20px",
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
      <img
        src="https://blog-consumer.glassdoor.com/site-us/wp-content/uploads/sites/2/di_prod_announcement.png"
        alt="Background"
        style={imgStyle}
      />

      <h1>Admin Page</h1>
      <h2>Users</h2>
      <Table
        style={{
          width: "70%",
          borderCollapse: "collapse",
          alignContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <TableHead>
          <TableRow style={{ backgroundColor: "#f2f2f2" }}>
            <TableCell
              style={{ fontWeight: "bold", padding: "4px", fontSize: "14px" }}
            >
              Full Name
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", padding: "4px", fontSize: "14px" }}
            >
              Email
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", padding: "4px", fontSize: "14px" }}
            >
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              style={{ borderBottom: "1px solid #dddddd" }}
            >
              <TableCell style={{ padding: "4px", fontSize: "14px" }}>
                {user.fullName}
              </TableCell>
              <TableCell style={{ padding: "4px", fontSize: "14px" }}>
                {user.email}
              </TableCell>
              <TableCell style={{ padding: "4px", fontSize: "14px" }}>
                {user.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Logout />
    </div>
  );
};

export default AdminPage;
