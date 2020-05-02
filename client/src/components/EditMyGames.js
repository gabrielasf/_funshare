import React, { Component } from "react";

export default class EditMyGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: [],
      myGameName: "",
      myGameLanguage: "",
      myGamePlayersMin: undefined,
      myGamePlayersMax: undefined,
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

    //create new game object
    let newGame = {};
    if (this.state.myGameName !== "") {
      newGame["myGameName"] = this.state.myGameName;
    }
    if (this.state.myGameLanguage !== "") {
      newGame["myGameLanguage"] = this.state.myGameLanguage;
    }
    if (this.state.myGamePlayersMin !== undefined) {
      newGame["myGamePlayersMin"] = this.state.myGamePlayersMin;
    }
    if (this.state.myGamePlayersMax !== undefined) {
      newGame["myGamePlayersMax"] = this.state.myGamePlayersMax;
    }
    if (this.state.myGameCategory !== "") {
      newGame["myGameCategory"] = this.state.myGameCategory;
    }

    //update allGames array with new game
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

  deleteGame = (index) => {
    // remove game by index from allGames
    this.state.allGames.splice(index, 1);

    this.setState({
      allGames: this.state.allGames,
    });

    fetch(`/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myGame: this.state.allGames,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error !== null) {
          console.log(response.error);
        } else {
          console.log("Game removed!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  formGroup = (label, name, value) => {
    return (
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            {label}
          </span>
        </div>
        <input
          onChange={this.handleInputChange}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name={name}
          value={value}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNewGame}>
          {this.formGroup("Name", "myGameName", this.state.myGameName)}
          {this.formGroup(
            "Language",
            "myGameLanguage",
            this.state.myGameLanguage
          )}
          {this.formGroup(
            "Minimum players",
            "myGamePlayersMin",
            this.state.myGamePlayersMin
          )}
          {this.formGroup(
            "Maximum players",
            "myGamePlayersMax",
            this.state.myGamePlayersMax
          )}

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Game's category
              </label>
            </div>
            <select name="myGameCategory" value={this.state.myGameCategory} onChange={this.handleInputChange} class="custom-select" id="inputGroupSelect01">
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
          <input class="btn btn-primary mb-4" type="submit" value="Add new game" />
        </form>
        <div>
          <span>My games: </span>
          <div className="container">
          <div className="row"> 
          {this.state.allGames.map((game, index) => {
            return (
              <div key={index} className="col-5">
                  <div className="userGameDispaly shadow rounded border">
                    <div><span className="label">Game's Name: </span>{game.myGameName}</div> 
                    <div><span className="label">Game's Language: </span>{game.myGameLanguage} </div>
                    <div><span className="label">Minimum players: </span>{game.myGamePlayersMin} </div>
                    <div><span className="label">Maximum players: </span>{game.myGamePlayersMax}</div>
                    <div><span className="label">Game's Category: </span>{game.myGameCategory} </div>
                  </div>
                <button className="btn btn-outline-danger mt-3 mb-5" onClick={() =>  this.deleteGame(index)}>
                  Delete
                </button>
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
