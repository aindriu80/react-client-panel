import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavBar />
          <h1>React front to back</h1>
        </div>
      </Router>
    );
  }
}

export default App;
