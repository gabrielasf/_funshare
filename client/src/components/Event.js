import React, { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      gameName: "",
      players: "",
      city: "",
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
        city: this.state.city,
        date: this.state.date,
        email: this.state.email,
        description: this.state.description,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ events: response });
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
        console.log(error);
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.addNewEvent}>
            <label>Name of the game</label>
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              id="gameName"
              name="gameName"
              required
              value={this.state.gameName}
            ></input>
            <br /> <label>Players:</label>
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              id="players"
              name="players"
              value={this.state.players}
            />
            <br />
            <label>Date:</label>
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              id="Date"
              name="Date"
              value={this.state.Date}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              id="email"
              name="email"
              value={this.state.email}
            />
            <br />
            <label>Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              id="description"
              name="description"
              value={this.state.description}
            />
            <br />
            <input
              className="btn btn-secondary"
              type="submit"
              value="Create a new event!"
            />
          </form>
        </div>{" "}
        <div className="container">
          {this.state.events.map((event, index) => {
            return (
              <div className="form-group">
                <div key={index}>
                  <span className="label">Name of the game: </span>
                  {event.gameName}
                </div>
                <div>
                  <span className="label">Players: </span>
                  {event.players}
                </div>
                <div>
                  <span className="label">City: </span>
                  {event.city}
                </div>
                <div>
                  <span className="label">Date: </span>
                  {event.date}
                </div>
                <div>
                  <span className="label">Email: </span>
                  {event.email}
                </div>
                <div>
                  <span className="label">Description: </span>
                  {event.description}
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
    );
  }
}
