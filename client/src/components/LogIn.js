import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


 class LogIn extends Component {

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
        this.props.history.push('/allusers');
      })
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
        <div class="contlogin container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
            <h3 className="login-heading mb-4">Choose a game.</h3>
            <h3 className="login-heading mb-4">Find players.</h3>
              <h3 className="login-heading mb-4">Play the game.</h3>
              <br/>
              <h3 className="login-heading mb-4">Welcome to funshare®</h3>
              <form onSubmit={this.onSubmit}>
              {this.state.loginState === "correct" && (
            <div className="talert alert-success"> You are logged in!</div>
            )}

          {this.state.loginState === "incorrect" && (
            <div className="alert alert-danger"> Username or password incorrect!</div>
          )}

                <div className="form-label-group">
                  <input 
                  type="email" 
                  id="inputEmail" 
                  className="form-control" 
                  placeholder="Email address" 
                  name="username" 
                  value={username} 
                  onChange={this.onChange}
                  required autofocus/>
                  <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input 
                  type="password" 
                  id="inputPassword" 
                  className="form-control" 
                  placeholder="Password" 
                  name="password" 
                  value={password} 
                  onChange={this.onChange}
                  required/>
                  <label for="inputPassword">Password</label>
                </div>

                
                <button 
                className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" 
                type="submit" 
                onClick={this.props.handleLogin}>Sign in</button>
                <div className="text-center">
                  <p className="medium" id="notmember">Not a member?    <a className="medium" href="http://localhost:3000/register">Register here</a></p></div>
              <br/>
              <br/>
              <br/>
              <br/>
                   <div className="text-center">
                    <span><a href="/about" className="medium btn m-0 p-0 aboutfunshare"><strong>About funshare®</strong></a></span>
                    <p className="small font-weight-light aboutfunshare">
                    © 2020 funshare, Incorporated
                    </p>
                    
                  </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          )
    };
}

export default withRouter(LogIn);


