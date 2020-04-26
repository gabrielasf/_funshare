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
        console.log(this.state.users);
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
    // event.preventDefault();
    // const value = event.target.value;
    // const name = event.target.name;

    // this.setState({
    //   [name]: value
    // });
  };


  searchByCity = event => {
    event.preventDefault();
    fetch(`/users/city/${this.state.cityToFilter}`)
    .then((response) => response.json())
    .then((response) => {
      //console.log(response);
      this.setState({ users: response})
    });
  };

  searchByCategory = event => {
    event.preventDefault();
    fetch(`/users/category/${this.state.gameCategory}`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ users: response})
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
    console.log("my game category value", gameCategoryValue);
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
      console.log(response);
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

       {/* <div className="input-group mb-3 input-group-prepend">
        <label className="input-group-text" for="inputGroupSelect01">City</label>
        <form onSubmit={this.searchByCity}>
          <input onChange={this.handleInputChange} type="text" name="cityToFilter" value={this.state.cityToFilter} />
          <input type="submit" value="Search" />
        </form>
        </div>
    */}
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
                  <div key={index} className="col-3">
                    <div className=" userDisplay shadow rounded border">
                      <div>
                        <span className="label">Name: </span>
                        {user.name}
                      </div>
                      <div>
                        <span className="label">City: </span>
                        {user.city}{" "}
                      </div>
                      <div>
                        <span className="label">Language: </span>
                        {user.language}{" "}
                      </div>
                      <div>
                        <span className="label">My game: </span>
                        {user.myGame}
                      </div>
                      <div>
                        <span className="label">My Game Category: </span>
                        {user.myGameCategory}{" "}
                      </div>
                      <div>
                        <span className="label">Email: </span>
                        {user.email}{" "}
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
