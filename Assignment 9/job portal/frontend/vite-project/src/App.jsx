// App.jsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
};

export default App;
