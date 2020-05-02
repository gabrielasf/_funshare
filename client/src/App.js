import React, { Component } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import About from "./components/About.js";
import MyAccount from "./components/MyAccount.js";
import LogIn from "./components/LogIn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:"",
      users: [],
      allUsers: [],
    };
  }

  componentDidMount = () => {
    console.log("this is user id from app.js", this.state.userId)
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

  componentDidUpdate = () => {
    console.log("this is user id from app.js", this.state.userId)
  }

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
          {/* <nav>
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
        </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/login" component={LogIn}>
              <LogIn getUserId={this.getUserId} />
            </Route> */}
            <Route path="/register" component={Register}>
              <Register userId={this.state.userId} />
            </Route>
            <Route path="/about">
              <About userId={this.state.userId} />
            </Route>
            <Route path="/allusers">
              <AllUsers userId={this.state.userId} />
            </Route>
            <Route path="/myaccount">
              <MyAccount userId={this.state.userId} />
            </Route>
            <Route path="/" component={LogIn}>
              <LogIn getUserId={this.getUserId} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
