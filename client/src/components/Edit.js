import React, { Component } from "react";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: "",
      editNickname: "",
      editEmail: "",
      editPassword: "",
      editAvatar: "",
      editLanguage: "",
      editAddress: "",
      editCity: "",
      editMyGame: "",
      editMyGameLanguage: "",
      editMyGamePlayers: "",
      editMyGameCategory: "",
      editHost: "",
      editGuest: "",
      editAboutMe: "",
      editEvents: "",
      editAvailability: "",
    };
  }

  componentDidMount() {
    this.getUserById(this.props.userId);
  }

  getUserById = (id) => {
    fetch(`/users/${this.props.userId}`) // not sure about the prop
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          editName: response.name,
          editNickname: response.nickname,
          editEmail: response.email,
          editPassword: response.password,
          editAvatar: response.avatar,
          editLanguage: response.language,
          editAddress: response.address,
          editCity: response.city,
          editMyGame: response.myGame,
          editMyGameLanguage: response.myGameLanguage,
          editMyGamePlayers: response.myGamePlayers,
          editMyGameCategory: response.myGameCategory,
          editHost: response.host,
          editGuest: response.guest,
          editAboutMe: response.aboutMe,
          editEvents: response.events,
          editAvailability: response.availability,
        });
      });
  };

  saveChanges = (event) => {
    event.preventDefault();
    fetch(`/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.editName,
        nickname: this.state.editNickname,
        email: this.state.editEmail,
        password: this.state.editPassword,
        avatar: this.state.editAvatar,
        language: this.state.editLanguage,
        address: this.state.editAddress,
        city: this.state.editCity,
        myGame: this.state.editMyGame,
        myGameLanguage: this.state.editMyGameLanguage,
        myGamePlayers: this.state.editMyGamePlayers,
        myGameCategory: this.state.editMyGameCategory,
        host: this.state.editHost,
        guest: this.state.editGuest,
        aboutMe: this.state.editAboutMe,
        events: this.state.editEvents,
        availability: this.state.editAvailability,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error !== null) {
          console.log(response.error);
        } else {
          console.log("Changes were saved");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <a
          id="link"
          className="btn btn-link btn-lg"
          href="http://localhost:3000/myaccount"
        >
          ⟵ See My Account
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h4 className="col-md-12 lead">Edit your Account details</h4>
                  <form onSubmit={this.saveChanges}>
                    <br />
                    <label>Name:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editName"
                      name="editName"
                      defaultValue={this.state.editName}
                    />
                    <br />
                    <label>Nickname:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editNickname"
                      name="editNickname"
                      defaultValue={this.state.editNickname}
                    />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editEmail"
                      name="editEmail"
                      defaultValue={this.state.editEmail}
                    />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editPassword"
                      name="editPassword"
                      defaultValue={this.state.editPassword}
                    />
                    <br />
                    <label>Avatar:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editAvatar"
                      name="editAvatar"
                      defaultValue={this.state.editAvatar}
                    />
                    <br />
                    <label>Language:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editLanguage"
                      name="editLanguage"
                      defaultValue={this.state.editLanguage}
                    />
                    <br />
                    <label>Address:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editAddress"
                      name="editAddress"
                      defaultValue={this.state.editAddress}
                    />
                    <br />
                    <label>City:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editCity"
                      name="editCity"
                      defaultValue={this.state.editCity}
                    />
                    <br />
                    <label>My game:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editMyGame"
                      name="editMyGame"
                      defaultValue={this.state.editMyGame}
                    />
                    <br />
                    <label>My game language:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editMyGameLanguage"
                      name="editMyGameLanguage"
                      defaultValue={this.state.editMyGame}
                    />
                    <br />
                    <label>My game players:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editMyGamePlayers"
                      name="editMyGamePlayers"
                      defaultValue={this.state.editMyGamePlayers}
                    />
                    <br />
                    <label>My game category:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editMyGameCategory"
                      name="editMyGameCategory"
                      defaultValue={this.state.editMyGameCategory}
                    />
                    <br />
                    <label>Host:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editHost"
                      name="editHost"
                      defaultValue={this.state.editHost}
                    />
                    <br />
                    <label>Guest:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editAboutMe"
                      name="editAboutMe"
                      defaultValue={this.state.editAboutMe}
                    />
                    <br />
                    <label>About me:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editGuest"
                      name="editGuest"
                      defaultValue={this.state.editGuest}
                    />
                    <br />
                    <label>Events:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editEvents"
                      name="editEvents"
                      defaultValue={this.state.editEvents}
                    />
                    <br />
                    <label>Availability:</label>
                    <br />
                    <input
                      onChange={this.handleInputChange}
                      className="form-control"
                      type="text"
                      id="editAvailability"
                      name="editAvailability"
                      defaultValue={this.state.editAvailability}
                    />
                    <br />
                    <input
                      className="btn btn-secondary btn-lg"
                      type="submit"
                      value="Save your changes"
                    />
                    <a
                      id="link"
                      className="btn btn-primary btn-lg"
                      href="http://localhost:3000/myaccount"
                      role="button"
                    >
                      Cancel
                    </a>
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
