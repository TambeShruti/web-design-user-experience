// components/SearchBar.jsx
import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    width: "50%",
    marginTop: "150px",
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        sx={{
          width: "100%",
          marginRight: "10px",
        }}
      />
      <IconButton
        aria-label="search"
        color="primary"
        sx={{
          padding: "10px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
