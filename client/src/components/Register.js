import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
      email: "",
      password: "",
    };
  }

  componentDiMount() {
    this.postUsers();
  }

  postUsers = () => {
    fetch("/")
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
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          user: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    const name = e.target.name;

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
      <div className="Form Center">
        <form onSubmit={this.handleSubmit} className="Form Fields">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <div className="Form Fields">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="Form Fields">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="Form Fields">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="Form Fields">
            <button
              type="submit"
              className="registerbtn"
              onClick={() => this.handleClick()}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

//CREATE REGISTER FORM
