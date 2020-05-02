import React, { Component } from "react";
import MapApp from "./MapApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      gameName: "",
      players: "",
      location: "",
      date: "",
      email: "",
      description: "",
    };
  }
  componentDidMount() {
    this.getEvents();
  }
  getEvents = () => {
    console.log("hello");
    fetch("/events")
      .then((response) => response.json())
      .then((response) => {
        console.log("This is the response", response);
        this.setState({ events: response });
      });
  };
  addNewEvent = (event) => {
    event.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameName: this.state.gameName,
        players: this.state.players,
        location: this.state.location,
        date: this.state.date,
        email: this.state.email,
        description: this.state.description,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ event: response });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteEvent = (i) => {
    fetch(`/events/${i}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          events: response,
        });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  handleChange = (e) => {
    //e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
          <div className="container">
            <a className="navbar-brand" href="#">
              funshare®
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link class="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/" >Log In</Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/myaccount" >My Account</Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/allusers">Players</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light">
                Create your event and start having fun!
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <MapApp eventLocation={this.state.location} />
              <div classNameName="form-group">
                <form onSubmit={this.addNewEvent}>
                  <div className="row">
                    <div className="col">
                      <label>Name of the game</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="gameName"
                        name="gameName"
                        required
                        value={this.state.gameName}
                      ></input>

                      <br />
                    </div>
                    <div className="col">
                      <label>Players:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="players"
                        name="players"
                        value={this.state.players}
                      />
                      <br />
                    </div>
                    <div className="col">
                      <label>Location:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={this.state.location}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Date:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="date"
                        name="date"
                        value={this.state.date}
                      />
                      <br />
                    </div>
                    <div className="col">
                      <label>Email:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                      />
                      <br />
                    </div>
                    <div className="col">
                      <label>Description:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={this.state.description}
                      />
                      <br />
                    </div>
                  </div>
                  <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Create a new event!"
                  />
                </form>
              </div>{" "}
              <div className="container">
                <div className="row">
                  {this.state.events.map((event, index) => {
                    return (
                      <div key={index}>
                        <div className="test shadow rounded border">
                          <div className="card-image-test"></div>
                          <div className="card-text-test">
                            <span className="label"></span>
                            <h3>{event.gameName}</h3>
                            <span className="label"></span>
                            {event.description}
                            <span className="labelLocation">
                              <h4>{event.location}</h4>
                            </span>
                            <span className="label"> </span>

                            <a href={`mailto:${event.email}`}>
                              <svg
                                className="bi bi-envelope"
                                width="2em"
                                height="2em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                                  clip-rule="evenodd"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                                  clip-rule="evenodd"
                                />
                                <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                              </svg>
                            </a>
                          </div>
                          <div className="card-stats">
                            <div className="stat border">
                              <div className="type">
                                <span className="label">Players: </span>
                              </div>
                              <div className="value">{event.players}</div>
                            </div>

                            <div className="stat border">
                              <div className="type">
                                <span className="label">Date: </span>
                              </div>
                              <div className="value">{event.date}</div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-outline-danger ml2"
                          onClick={() => this.deleteEvent(event._id)}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

