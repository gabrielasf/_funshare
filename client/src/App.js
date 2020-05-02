import React, { Component } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import About from "./components/About.js";
import MyAccount from "./components/MyAccount.js";
import Event from "./components/Event.js";
import MapApp from "./components/MapApp.js";
import LogIn from "./components/LogIn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      users: [],
      allUsers: [],
    };
  }

  // editUsers = (userId) => {
  //   this.setState({
  //     userId: userId,
  //   });
  // };

  getUserId = (_id) => {
    this.setState({
      userId: _id,
    });
  };

  //  componentDidMount() {
  //   axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
  //   axios.get('/users')
  //     .then(res => {
  //       console.log(this.state.users);
  //       this.setState({ users: res.data });
  //     })
  //     .catch((error) => {
  //       if(error.response === 401) {
  //         this.props.history.push("/login");
  //       }
  //     });
  // }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route path="/login" component={LogIn}>
              <LogIn getUserId={this.getUserId} />
            </Route> */}
            <Route path="/register" component={Register}>
              <Register userId={this.state.userId} />
            </Route>
            <Route path="/about">
              <About userId={this.state.userId}/>
            </Route>
            <Route path="/allusers">
              <AllUsers userId={this.state.userId} />
            </Route>
            <Route path="/myaccount">
              <MyAccount userId={this.state.userId} />
            </Route>
            <Route path="/event">
              <Event userId={this.state.userId}/>
            </Route>
            <Route path="/map">
              <MapApp userId={this.state.userId}/>
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Route path="/" component={LogIn}>
              <LogIn getUserId={this.getUserId} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
