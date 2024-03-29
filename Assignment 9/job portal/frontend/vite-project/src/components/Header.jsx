// components/Header.jsx
import React from "react";
import { AppBar, Tabs, Tab, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
      sx={{
        fontFamily: "'Roboto', sans-serif",
        color: "black",
        "&.Mui-selected": {
          color: green[500],
          borderBottom: `2px solid ${green[500]}`,
        },
      }}
    />
  );
}

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="header tabs"
        role="navigation"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          borderBottom: "1px solid #ccc",
        }}
      >
        <LinkTab label="Home" to="/" />
        <LinkTab label="About" to="/about" />
        <LinkTab label="Jobs" to="/jobs" />
        <LinkTab label="Companies" to="/companies" />
        <LinkTab label="Salaries" to="/salaries" />
      </Tabs>
      <IconButton
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
          color: "black",
        }}
        component={Link}
        to="/login"
      >
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
};
// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Tabs>
//         <Tab label="Home" component={Link} to="/" />
//         <Tab label="Login" component={Link} to="/login" />
//         <Tab label="About" component={Link} to="/about" />
//       </Tabs>
//     </AppBar>
//   );
// };
export default Header;
