import React, { Component } from "react";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cityToFilter: "",
      gameCategory: ""
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
    fetch("/users/filteredSearch", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameCategory: this.state.gameCategory,
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
          <select className="custom-select" onChange={this.handleInputChange} name="gameCategory">
          <option selected>Choose...</option>
          <option value="rollAndMove">Roll and Move</option>
          <option value="workerPlacement">Worker Placement</option>
          <option value="cooperative">Cooperative </option>
          <option value="deckBuilding">Deck-Building </option>
          <option value="areaControl">Area Control  </option>
          <option value="secretIdentity">Secret Identity </option>
          <option value="legacy">Legacy </option>
          <option value="party">Party </option>
          <option value="puzzle">Puzzle </option>
          <option value="combat">Combat </option>
          <option value="jigsaw">Jigsaw </option>
          </select>
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
