import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
      city: "",
      email: "",
      password: "",
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
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          users: response,
        });
      })
      .catch((error) => {
        console.log(error);
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
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <div className="Form Center">
                <form onSubmit={this.handleSubmit} className="Form Fields">
                  <h1 className="text-center mb-3">
                    <i className="fas fa-user-plus"></i>Sign Up
                  </h1>
                  <p>Please fill in this form to create an account.</p>
                  <br />
                  <label>Name</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></input>
                  <br />
                  <label>City</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your City"
                    name="city"
                    required
                    value={this.state.city}
                    onChange={this.handleChange}
                  ></input>
                  <br />
                  <label>Email</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                  <br />
                  <label>Password</label>
                  <br />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                  <br />
                  <a
                    id="link"
                    className="btn btn-primary btn-block"
                    href="http://localhost:3000/login"
                    onClick={() => this.handleClick()}
                    role="button"
                  >
                    Register
                  </a>
                </form>
                <p className="lead mt-4">
                  Already have an account?
                  <a href="http://localhost:3000/login"> Log in here!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
