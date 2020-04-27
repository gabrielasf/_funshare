import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class LogIn extends Component {

   constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      loginState: "begin",
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({loginState : "correct"})
        //this.props.history.push('/allusers')
        //this.setState({ message: 'You are logged in!'});
         this.context.history.push('/allusers');
      })
      
      // .then((data) => {
      //   console.log(data);
      //   this.props.getUserId(data[0].id);
      //   this.setState({
      //     username: "",
      //     password: "",
      //   });
      // })
     
      .catch((error) => {
        if(error.response.status === 401) {
          //this.setState({ message: 'Login failed. Username or password not match' });
          this.setState({ loginState: "incorrect"});
        }
      });
  }

          
    render() {
      const { username, password, message } = this.state;
      return (
        <div className="container">
          <form className="form-signin" onSubmit={this.onSubmit}>

          {this.state.loginState === "correct" && (
            <div className="talert alert-success"> You are logged in!</div>
          )}

          {this.state.loginState === "incorrect" && (
            <div className="alert alert-danger"> Username or password incorrect!</div>
          )}
            <h2 className="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.props.handleLogin}
            >Login</button>
            <p>
              Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
            </p>
          </form>
        </div>


          )
    };
}



