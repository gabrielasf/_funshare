import React, { Component } from "react";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
        console.log(this.state.users);
      });
  };

  render() {
    return (
      <div>
        <h1>ALL USERS</h1>
        <div className="container">
          <div className="row">
            <div>
              {this.state.users.map((user, index) => {
                return (
                  <div key={index} className="col-4">
                    <div className=" userDisplay shadow rounded border">
                      <div>
                        <span className="label">Name: </span>
                        {user.name}
                      </div>
                      <div>
                        <span className="label">City: </span>
                        {user.city}{" "}
                      </div>
                      <div>
                        <span className="label">Language: </span>
                        {user.language}{" "}
                      </div>
                      <div>
                        <span className="label">My game: </span>
                        {user.myGame}
                      </div>
                      <div>
                        <span className="label">My Game Category: </span>
                        {user.myGameCategory}{" "}
                      </div>
                      <div>
                        <span className="label">Email: </span>
                        {user.email}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
