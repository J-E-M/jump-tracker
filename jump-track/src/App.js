import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register";
import LogIn from "./components/Login";
import Home from "./components/Home";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Goals from "./components/Goals";
import PrivateRoute from "./components/PrivateRoute";
import Exercises from "./components/Exercises";

class App extends Component {
  handleClick = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navLinks">
            <NavLink exact to="/">
              {" "}
              Home
            </NavLink>
            <NavLink to="/protected">Goals</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/logIn">Log In</NavLink>
            <NavLink to="/">
              <div className="appDiv" onClick={this.handleClick}>
                Log out
              </div>
            </NavLink>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/exercises/:id" component={Exercises} />
          <PrivateRoute exact path="/protected" component={Goals} />
        </div>
      </Router>
    );
  }
}

export default App;
