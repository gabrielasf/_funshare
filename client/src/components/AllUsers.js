import React, { Component } from "react";
import MultiSelect from "react-multi-select-component";
import { withRouter } from 'react-router';

class AllUsers extends Component {
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

  logout = () => {
            localStorage.removeItem('jwtToken');
            //window.location.reload();
            this.props.history.push('/login');
          }

  myAccount = () => {
    
    this.props.history.push('/myAccount');
  }
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
    
if(localStorage.getItem('jwtToken')){
    return (
      <div className="container-fluid allusers">
        <h1>ALL USERS</h1>
        <button className="btn btn-primary" onClick={this.logout}>Logout</button> 
        <button className="btn btn-primary" onClick={this.myAccount}>My Account</button> 
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

                    {user.avatar !== undefined &&
                      <div>
                        <span className="label">Avatar</span>
                        {user.avatar}
                      </div>}
                      
                      {user.name !== undefined &&
                      <div>
                        <span className="label">Name: </span>
                        {user.name}
                      </div>}

                      {user.nickname !== undefined &&
                      <div>
                        <span className="label">Nickname: </span>
                        {user.nickname}
                      </div>}

                      {user.city !== undefined &&
                      <div>
                        <span className="label">City: </span>
                        {user.city}
                      </div>}

                      {user.aboutMe !== undefined &&
                      <div>
                        <span className="label">About me: </span>
                        {user.aboutMe}
                      </div>}

                      {user.username !== undefined &&
                      <div>
                        <span className="label">Email: </span>
                        {user.username}
                      </div>}

                      {user.availability !== undefined &&
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

)} else {

    return (

        <div id="gameover" className="container-fluid">
            <img src="https://miro.medium.com/max/1200/1*sgx0PeiAxkB5qUnbI79S-g.png" className="mx-auto d-block"/>
            <h1 className="auth text-center">Error 401 - Unauthorized</h1>
            <br/>
            <a href="/login" className="btn btn-light btn-lg d-block mt-10">PRESS HERE TO START A NEW GAME</a> 
            <br/>
            <br/>
            <br/>
        </div> 
        
    )}
}
}
 
    

export default withRouter(AllUsers);