import React, { Component, useState }  from 'react';
import './App.css';
import AllUsers from './components/AllUsers.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import About from './components/About.js';
import MyAccount from './components/MyAccount.js';
import axios from 'axios';
import LogIn from './components/LogIn';
import Edit from './components/Edit';



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//export default function App() {

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anything: "",
      userId: "5ea194b2cf7386319ec4727b",
      allUsers: [],
    };
  }

  editUsers = (userId) => {
    this.setState({
      userId: userId,
    });
  };

  handleLogin = e => {
    const [user, setUser] = useState(false);
    e.preventDefault();
    setUser(true);
  }

 componentDidMount() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  axios.get('/api/users')
    .then(res => {
      this.setState({ users: res.data });
      console.log(this.state.users);
    })
    .catch((error) => {
      if(error.response === 401) {
        //this.props.history.push("/login");
      }
    });
}

logout = () => {
  localStorage.removeItem('jwtToken');
  window.location.reload();
}
 

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
          <Route path="/login" component={LogIn}>
            <LogIn />
          </Route>
          <Route path="/register" component={Register}>
            <Register />
          </Route>
          <Route path="/edit">
              <Edit userId={this.state.userId} />
            </Route>
          <Route path="/myaccount">
            <MyAccount />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )};
}
