import React, { Component } from "react";

export default class EditMyGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: [],
      myGameName: "",
      myGameLanguage: "",
      myGamePlayers: null,
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
    console.log("this is new game", newGame);

    let updatedGames = [...this.state.allGames, newGame]
    this.setState({
      allGames: updatedGames,
    });

    fetch(`/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myGame: updatedGames
      })
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
              type="number"
              name="myGamePlayers"
              value={this.state.myGamePlayers}
            />
          </div>
          <div>
            Game's Category:
            <input
              onChange={this.handleInputChange}
              type="text"
              name="myGameCategory"
              value={this.state.myGameCategory}
            />
          </div>
          <input type="submit" value="Add new game" />
        </form>
      </div>
    );
  }
}
