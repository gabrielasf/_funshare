import React, { Component } from "react";
import MapApp from "./MapApp";

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
          <div class="container">
            <a class="navbar-brand" href="#">
              funshare®
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/myaccount">
                    My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="card border-0 shadow my-5">
            <div class="card-body p-5">
              <h1 class="font-weight-light">
                Fixed Full Page Background Image
              </h1>
              <p class="lead">
                In this snippet, the background image is fixed to the body
                element. Content on the page will scroll, but the image will
                remain in a fixed position!
              </p>
              <MapApp eventLocation={this.state.location} />
              <div className="form-group">
                <form onSubmit={this.addNewEvent}>
                  <div class="row">
                    <div class="col">
                      <label>Name of the game</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                        id="gameName"
                        name="gameName"
                        required
                        value={this.state.gameName}
                      ></input>

                      <br />
                    </div>
                    <div class="col">
                      <label>Players:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                        id="players"
                        name="players"
                        value={this.state.players}
                      />
                      <br />
                    </div>
                    <div class="col">
                      <label>Location:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                        id="location"
                        name="location"
                        value={this.state.location}
                      />
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <label>Date:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                        id="date"
                        name="date"
                        value={this.state.date}
                      />
                      <br />
                    </div>
                    <div class="col">
                      <label>Email:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                      />
                      <br />
                    </div>
                    <div class="col">
                      <label>Description:</label>
                      <br />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
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
                      <div key={index} className="col-4">
                        <div className="card-test shadow rounded border">
                          <div class="card-image-test"></div>
                          <div class="card-text-test">
                            <span className="label"></span>
                            <h3>{event.gameName}</h3>
                            <div>
                              <span className="label"></span>
                              {event.description}
                            </div>

                            <span className="label"> </span>
                            <h4>{event.location}</h4>

                            <span className="label"> </span>
                            {event.email}
                          </div>

                          <div class="card-stats">
                            <div class="stat">
                              <div class="type">
                                <span className="label">Players: </span>
                              </div>
                              <div class="value">{event.players}</div>
                            </div>

                            <div class="stat border">
                              <div class="type">
                                <span className="label">Date: </span>
                              </div>
                              <div class="value">{event.date}</div>
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
