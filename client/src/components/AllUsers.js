import React, { Component } from "react";
import MultiSelect from "react-multi-select-component";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cityToFilter: "",
      gameCategory: [],
      gameLanguage: ""
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

  /*searchByCityAndCategory = event => {
    event.preventDefault();
    fetch(`/users/cityAndCategory/${this.state.cityToFilter}/${this.state.gameCategory}`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ users: response})
    });
  }; */


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
        gameLanguage: this.state.gameLanguage
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
          <label>City:</label>
          <input onChange={this.handleInputChange} type="text" name="cityToFilter" value={this.state.cityToFilter} />
          <label>Game's Language:</label>
          <input onChange={this.handleInputChange} type="text" name="gameLanguage" value={this.state.gameLanguage} />
          <button onClick={this.searchByMultiple}>Search</button>
        </div>

        <div className="container">
          <div className="row">
              {this.state.users.map((user, index) => {
                return (
                  <div key={index} className="col-4">
                    <div className=" userDisplay shadow rounded border">

                    {user.avatar !== "" &&
                      <div>
                        <span className="label">Avatar</span>
                        {user.avatar}
                      </div>}
                      
                      {user.name !== "" &&
                      <div>
                        <span className="label">Name: </span>
                        {user.name}
                      </div>}

                      {user.nickname !== "" &&
                      <div>
                        <span className="label">Nickname: </span>
                        {user.nickname}
                      </div>}

                      {user.city !== "" &&
                      <div>
                        <span className="label">City: </span>
                        {user.city}
                      </div>}

                      {user.aboutMe !== "" &&
                      <div>
                        <span className="label">About me: </span>
                        {user.aboutMe}
                      </div>}

                      {user.email !== "" &&
                      <div>
                        <span className="label">Email: </span>
                        {user.email}
                      </div>}

                      {user.availability !== "" &&
                      <div>
                        <span className="label">Availability: </span>
                        {user.availability}
                      </div>}

                      <div>
                        <span>My games: </span>
                        {user.myGame.map((game, index) => {
                          return (
                          <div className="mb-4" key={index}>

                            {game.myGameName !== "" &&
                            <div>
                              <span>Game's Name: </span>
                              {game.myGameName}
                            </div>}

                            {game.myGameLanguage !== "" &&
                            <div>
                              <span>Game's Language: </span>
                              {game.myGameLanguage}
                            </div>}

                            {game.myGamePlayersMin !== undefined &&
                            <div>
                              <span>Minimum players: </span>
                              {game.myGamePlayersMin}
                            </div>}

                            {game.myGamePlayersMax !== undefined &&
                            <div>
                              <span>Maximum players: </span>
                              {game.myGamePlayersMax}
                            </div>}

                            {game.myGameCategory !== "" &&
                            <div>
                              <span>Game's Category: </span>
                              {game.myGameCategory}
                            </div>}
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
