import React, { Component } from "react";

export default class EditProfile extends Component {
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
      aboutMe: "",
      events: "",
      availability: "",
      mode: "profile",
    };
  }

  componentDidMount() {
    this.getUserById(this.props.userId);
  }

  getUserById = (id) => {
    fetch(`/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          name: response.name,
          nickname: response.nickname,
          email: response.email,
          password: response.password,
          avatar: response.avatar,
          language: response.language,
          address: response.address,
          city: response.city,
          myGame: response.myGame,
          myGameLanguage: response.myGameLanguage,
          myGamePlayers: response.myGamePlayers,
          myGameCategory: response.myGameCategory,
          aboutMe: response.aboutMe,
          events: response.events,
          availability: response.availability,
        });
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

  saveChanges = (event) => {
    event.preventDefault();
    fetch(`/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
        address: this.state.address,
        city: this.state.city,
        myGame: this.state.myGame,
        myGameLanguage: this.state.myGameLanguage,
        myGamePlayers: this.state.myGamePlayers,
        myGameCategory: this.state.myGameCategory,
        aboutMe: this.state.aboutMe,
        events: this.state.events,
        availability: this.state.availability,
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

  formGroup = (label, name, value) => {
    return (
      <div className="form-group">
        <label className="col-md-2 col-sm-3 col-xs-12 control-label">
          {label}
        </label>
        <div className="col-md-10 col-sm-9 col-xs-12">
          <input
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            name={name}
            value={value}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2 className="title">Profile</h2>
        <form onSubmit={this.saveChanges} className="form-horizontal">
          <fieldset className="fieldset">
            <h3 className="fieldset-title">Personal Info</h3>
            <div className="form-group avatar">
              <figure className="figure col-md-2 col-sm-3 col-xs-12">
                <img
                  className="img-rounded img-responsive"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
              </figure>
              <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                <input type="file" className="file-uploader pull-left" />
                <button
                  type="submit"
                  className="btn btn-sm btn-default-alt pull-left"
                >
                  Update Image
                </button>
              </div>
            </div>
            {this.formGroup("Name", "name", this.state.name)}
            {this.formGroup("Nickname", "nickname", this.state.nickname)}
            {this.formGroup("City", "city", this.state.city)}
            {this.formGroup("Address", "address", this.state.address)}
            <div className="form-group">
              <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                About Me
              </label>
              <div className="col-md-10 col-sm-9 col-xs-12">
                <textarea
                  onChange={this.handleInputChange}
                  type="text"
                  className="form-control"
                  name="aboutMe"
                  value={this.state.aboutMe}
                />
              </div>
            </div>
            {this.formGroup("Availability", "availability", this.state.availability)}
            {this.formGroup("Events", "events", this.state.events)}
          </fieldset>

          <fieldset className="fieldset">
            <h3 className="fieldset-title">Login details</h3>
            {this.formGroup("Email", "email", this.state.email)}
            {this.formGroup("Password", "password", this.state.password)}
          </fieldset>
          <hr />
          <div className="form-group">
            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
              <input
                className="btn btn-primary"
                type="submit"
                value="Update Profile"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
