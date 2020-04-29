import React, { Component } from "react";

export default class EditMyGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: [],
      myGameName: "",
      myGameLanguage: "",
      myGamePlayers: undefined,
      myGameCategory: "",
    };
  }

  componentDidMount() {
    this.getUserById(this.props.userId);
  }

  getUserById = (id) => {
    fetch(`/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((response) => {
        console.log("response in gameEdit", response);
        this.setState({
          allGames: response.myGame,
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

  addNewGame = (event) => {
    event.preventDefault();
    let newGame = {};
    if (this.state.myGameName !== "") {
      newGame["myGameName"] = this.state.myGameName;
    }
    if (this.state.myGameLanguage !== "") {
      newGame["myGameLanguage"] = this.state.myGameLanguage;
    }
    if (this.state.myGamePlayers !== undefined) {
      newGame["myGamePlayers"] = this.state.myGamePlayers;
    }
    if (this.state.myGameCategory !== "") {
      newGame["myGameCategory"] = this.state.myGameCategory;
    }

    let updatedGames = [...this.state.allGames, newGame];

    this.setState({
      allGames: updatedGames,
    });

    fetch(`/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myGame: updatedGames,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error !== null) {
          console.log(response.error);
        } else {
          console.log("New game added!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <h2 className="title">My games</h2>
        <form onSubmit={this.addNewGame}>
          <div>
            Game's Name:
            <input
              onChange={this.handleInputChange}
              type="text"
              name="myGameName"
              value={this.state.myGameName}
            />
          </div>
          <div>
            Game's Language:
            <input
              onChange={this.handleInputChange}
              type="text"
              name="myGameLanguage"
              value={this.state.myGameLanguage}
            />
          </div>
          <div>
            Game's Players:
            <input
              onChange={this.handleInputChange}
              type="text"
              name="myGamePlayers"
              value={this.state.myGamePlayers}
            />
          </div>
          <div>
            Game's Category:
            <select
              className="custom-select"
              onChange={this.handleInputChange}
              name="myGameCategory"
            >
              <option selected>Choose...</option>
              <option value="rollAndMove">Roll and Move</option>
              <option value="workerPlacement">Worker Placement</option>
              <option value="cooperative">Cooperative </option>
              <option value="deckBuilding">Deck-Building </option>
              <option value="areaControl">Area Control </option>
              <option value="secretIdentity">Secret Identity </option>
              <option value="legacy">Legacy </option>
              <option value="party">Party </option>
              <option value="puzzle">Puzzle </option>
              <option value="combat">Combat </option>
              <option value="jigsaw">Jigsaw </option>
            </select>
          </div>
          <input type="submit" value="Add new game" />
        </form>
        <div>
          <span>My games: </span>
          {this.state.allGames.map((game, index) => {
            return (
              <div className="mb-4" key={index}>
                <div>
                  <span>Game's Name: </span>
                  {game.myGameName}
                </div>
                <div>
                  <span>Game's Language: </span>
                  {game.myGameLanguage}
                </div>
                <div>
                  <span>Players: </span>
                  {game.myGamePlayers}
                </div>
                <div>
                  <span>Game's Category: </span>
                  {game.myGameCategory}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
