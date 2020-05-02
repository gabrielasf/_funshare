import React, { Component } from "react";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      username: "",
      password: "",
      avatar: "",
      language: "",
      address: "",
      city: "",
      aboutMe: "",
      events: "",
      availability: "",

      //to toggle message to user
      updateProfileState: "begin"
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
          username: response.username,
          password: response.password,
          avatar: response.avatar,
          language: response.language,
          address: response.address,
          city: response.city,
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
        username: this.state.username,
        password: this.state.password,
        avatar: this.state.avatar,
        address: this.state.address,
        city: this.state.city,
        aboutMe: this.state.aboutMe,
        events: this.state.events,
        availability: this.state.availability,
      }),
    })
      .then((response) => response.json())
      .then((response) => {

        //to toggle message for user if update succed
        this.setState({
          updateProfileState: "success"
        })

        if (response.error !== null) {
          console.log(response.error);
        } else {
          console.log("Changes were saved");
        }
      })
      .catch((error) => {
        console.error("Error:", error);

        //to toggle message for user if update didn't happend
        this.setState({
          updateProfileState: "error"
        })
      });
  };


  //styling for multiple inputs
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
        <form onSubmit={this.saveChanges} className="form-horizontal">
          <fieldset className="fieldset">
            
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
            {this.formGroup("Email", "username", this.state.username)}
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
            {this.state.updateProfileState === "success" && (
            <h5 className="text-success">Your profile is updated!</h5>
            )}

            {this.state.updateProfileState === "error" && (
            <h5 className="text-danger">Sorry there was an error, please try again!</h5>
            )}

            </div>
        </form>
      </div>
    );
  }
}
