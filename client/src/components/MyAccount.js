import React, { Component } from "react";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      email: "",
      password: "",
      avatar: "",
      language: "",
      address: "",
      city: "",
      myGame: "",
      myGameLanguage: "",
      myGamePlayers: "",
      myGameCategory: "",
      host: "",
      guest: "",
      aboutMe: "",
      events: "",
      availability: "",
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">My Account</h1>
        <p className="text-center mb-3">See my details and edit account</p>
        <div className="form-group">
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <form>
                  <br />
                  <label>Name:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="Name"
                  />
                  <br />
                  <label>Nickname:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="nickname"
                    name="nickname"
                  />
                  <br />
                  <label>Email:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                  />
                  <br />
                  <label>Password:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="password"
                    name="password"
                  />
                  <br />
                  <label>Avatar:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="avatar"
                    name="avatar"
                  />
                  <br />
                  <label>Language:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="language"
                    name="language"
                  />
                  <br />
                  <label>Address:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="address"
                    name="address"
                  />
                  <br />
                  <label>City:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="city"
                    name="city"
                  />
                  <br />
                  <label>My game:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="myGame"
                    name="myGame"
                  />
                  <br />
                  <label>My game language:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="myGameLanguage"
                    name="myGameLanguage"
                  />
                  <br />
                  <label>My game players:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="myGamePlayers"
                    name="myGamePlayers"
                  />
                  <br />
                  <label>My game category:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="myGameCategory"
                    name="myGameCategory"
                  />
                  <label>Host:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="host"
                    name="host"
                  />
                  <br />
                  <label>Guest:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="guest"
                    name="guest"
                  />
                  <br />
                  <label>About me:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="aboutMe"
                    name="aboutMe"
                  />
                  <br />
                  <label>Events:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="events"
                    name="events"
                  />
                  <br />
                  <label>Availability:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="availability"
                    name="availability"
                  />
                  <br />
                  <a
                    id="link"
                    className="btn btn-primary btn-lg"
                    href="http://localhost:3000/edit"
                    role="button"
                  >
                    Edit
                  </a>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
