import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
        type,
      });
      console.log(response);
      const token = response.data.token;
      // Store the token in local storage or cookies
      localStorage.setItem("token", token);
      // Redirect or handle successful login
      setError("");
      if (type === "admin") {
        navigate("/admin");
      } else if (type === "employee") {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data.error);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          {error && (
            <Typography variant="body2" sx={{ color: "red", marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Select
            fullWidth
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            variant="outlined"
            margin="normal"
          >
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              marginTop: 2,
              backgroundColor: green[500],
              "&:hover": { backgroundColor: green[700] },
            }}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
