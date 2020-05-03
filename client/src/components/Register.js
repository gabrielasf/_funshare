import React, { Component } from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
      city: "",
      username: "",
      password: "",
      regState: "",
    };
  }

  componentDidMount() {
    this.postUsers();
  }

  postUsers = () => {
    fetch("/users/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  handleClick = () => {
    fetch("/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        city: this.state.city,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          users: response,
          regState: "correct",
        });
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ regState: "incorrect" });
      });
  };

  handleChange = (e) => {
    const name = e.target.name;
    //const value = e.target.value;

    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("The form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container-fluid contreg" id="register">
          <div>
            <nav className="navbar togcolor navbar-expand-lg text-right">
              <a className="navbar-brand text-right font-weight-bold">
                funshare®
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    className="togcolor nav-item btn active text-right font-weight-light"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="togcolor nav-item btn active text-right font-weight-light"
                    to="/"
                  >
                    Log In
                  </Link>
                  <Link
                    className="togcolor nav-item btn active text-right font-weight-light"
                    to="/myaccount"
                  >
                    My account
                  </Link>
                  <Link
                    className="togcolor nav-item btn active text-right font-weight-light"
                    to="/allusers"
                  >
                    Players
                  </Link>
                  <Link
                    className="togcolor nav-item btn active text-right font-weight-light"
                    to="/event"
                  >
                    Events
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-0">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center font-weight-normal">
                    Let the games begin.
                  </h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    {this.state.regState === "incorrect" && (
                      <div className="alert alert-danger alert-dismissible">
                        {" "}
                        Email already registered!
                      </div>
                    )}
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputUserame"
                        className="form-control"
                        placeholder="Enter your Name"
                        name="name"
                        required
                        autofocus
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <label for="inputUserame">Name</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                      />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputCity"
                        className="form-control"
                        placeholder="Enter your City"
                        name="city"
                        required
                        autofocus
                        value={this.state.city}
                        onChange={this.handleChange}
                      />
                      <label for="inputCity">City</label>
                    </div>

                    <hr />

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={() => this.handleClick()}
                    >
                      Register
                    </button>
                    <a
                      className="d-block text-center mt-2"
                      href="http://localhost:3000/login"
                    >
                      Sign In
                    </a>
                    <hr className="my-4"></hr>
                    <button
                      class="btn btn-lg btn-google btn-block text-uppercase"
                      type="submit"
                    >
                      <i class="fab mr-2"></i> Sign up with Google
                    </button>
                    <button
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      type="submit"
                    >
                      <i className="fab mr-2"></i> Sign up with Facebook
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
