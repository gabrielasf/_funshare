import React, { Component } from "react";
import MultiSelect from "react-multi-select-component";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cityToFilter: "",
      gameCategory: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
        //console.log(this.state.users);
      });
  };

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    console.log("event", event);

    this.setState({
      gameCategory: event
    });
  };

  searchByCityAndCategory = event => {
    event.preventDefault();
    fetch(`/users/cityAndCategory/${this.state.cityToFilter}/${this.state.gameCategory}`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ users: response})
    });
  };


  searchByMultiple = (event) => {
    event.preventDefault();
    let gameCategoryValue = this.state.gameCategory.map(e => e.value);
    
    fetch("/users/filteredSearch", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameCategory: gameCategoryValue,
        cityToFilter: this.state.cityToFilter,
      }),
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("filtered search response", response);
      this.setState({users: response})
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

 /* <div>
  <span className="label">My Game Category: </span>
  {user.myGameCategory}{" "}
</div> */

  render() {
    return (
      <div>
        <h1>ALL USERS</h1>

        <div className="input-group mb-3 input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Game category</label>
          <MultiSelect
            options={[
              { label: "Roll and Move", value: "rollAndMove" },
              { label: "Worker Placement", value: "workerPlacement" },
              { label: "Cooperative", value: "cooperative" },
              { label: "Deck-Building", value: "deckBuilding" },
              { label: "Area Control", value: "areaControl" },
              { label: "Secret Identity", value: "secretIdentity" },
              { label: "Legacy", value: "legacy" },
              { label: "Party", value: "party" },
              { label: "Combat", value: "combat" },
              { label: "Puzzle", value: "puzzle" },
              { label: "Jigsaw", value: "jigsaw" }
            ]}
            value={this.state.gameCategory}
            onChange={this.handleSelect}
            labelledBy={"Select"}
          />
          <input onChange={this.handleInputChange} type="text" name="cityToFilter" value={this.state.cityToFilter} />
          <button onClick={this.searchByMultiple}>Search</button>
        </div>

        <div className="container">
          <div className="row">
              {this.state.users.map((user, index) => {
                return (
                  <div key={index} className="col-4">
                    <div className=" userDisplay shadow rounded border">
                      <div>
                        <span className="label">Name: </span>
                        {user.name}
                      </div>
                      <div>
                        <span className="label">City: </span>
                        {user.city}
                      </div>
                      <div>
                        <span className="label">Email: </span>
                        {user.email}
                      </div>
                      <div>
                        <span>My games: </span>
                        {user.myGame.map((game, index) => {
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
                          )
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
