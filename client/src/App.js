import React, { Component } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import About from "./components/About.js";
import MyAccount from "./components/MyAccount.js";
import Edit from "./components/Edit.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//export default function App() {

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anything: "",
      userId: "5ea72bcb005f665fa8c936b1",
      allUsers: [],
    };
  }

  editUsers = (userId) => {
    this.setState({
      userId: userId,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/allusers">All Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/allusers">
              <AllUsers />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myaccount">
              <MyAccount userId={this.state.userId} />
            </Route>
            <Route path="/edit">
              <Edit userId={this.state.userId} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
