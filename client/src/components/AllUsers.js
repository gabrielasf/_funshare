import React, { Component } from "react";
import MultiSelect from "react-multi-select-component";
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div className="container">
    <a className="navbar-brand" href="#">funshare®</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/about" >About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/myaccount" >My Account</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/event" >Events</Link>
        </li>
        <li className="nav-item">
        <button className="btn btn-info" onClick={this.logout}>Logout</button> 
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="container allusers">
      <div className="card allusers border-0 my-5">
    <div className="card-body m-0 p-7">
        <h1 className="font-weight-light card-header bg-info">Players gonna play.</h1>
        <br/>
        <p className="lead">Use one or more of the search fields below to find your next ally... or oponent!</p>
        <div className="form-group mx-1">
          <label className="mr-2 inline font-weight-light small" htmlFor="inputGroupSelect01">Games Categories</label>
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
          </div>
          
        <form className="mx-2">
            <div className="row">
                <div className="col">
                   <input onChange={this.handleInputChange} name="cityToFilter" value={this.state.cityToFilter}   type="text" className="form-control" placeholder="City"/>
                </div>
               <div className="col">
                  <input onChange={this.handleInputChange} type="text" name="gameLanguage" value={this.state.gameLanguage}  class="form-control" placeholder="Game's Language"/>
              </div>
              <div >
                <button className="btn btn-outline-info mx-3"  onClick={this.searchByMultiple}>Search</button>
             </div>
            </div>
        </form>

        <div className="container">
          <div className="row">
              {this.state.users.map((user, index) => {
                return (
                  <div key={index} className="col-4">
                    <div className="userDisplay shadow border">

                    {user.avatar !== undefined &&
                      <div>
                        <span className="label">Avatar</span>
                        {user.avatar}
                      </div>}
                      
                      {user.nickname !== "" &&
                      <div>
                        <h2 className="card-header text-center bg-info">{user.nickname}</h2>
                      </div>}

                      {user.name !== undefined &&
                      <div>
                        <p className="text-center">I'm <h5 className="d-inline ">{user.name}</h5> </p>
                      </div>}

                      {user.city !== undefined &&
                      <div>
                        <p className="text-center">from <h5 className="d-inline ">{user.city}</h5> </p>
                      </div>}

                      {user.aboutMe !== undefined &&
                      <div>
                        <span className="label small">About me: {user.aboutMe} </span>
                      </div>}

                      {user.availability !== undefined &&
                      <div>
                        <span className="label small">Availability: {user.availability}</span>
                        
                        </div>}

                      <div>
                        <span className="small text-center">Email: {user.username}</span>
                        
                      </div>

                      {user.availability !== undefined &&
                      <div>
                        <p className="small text-center">{user.email}</p>
                      </div>}

                      <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      My Games</button>
                      <div>
                        <div className="collapse" id="collapseExample">
                          <div className="card myGamescolor card-body">
                          {user.myGame.map((game, index) => {
                          return (
                          <div className="mb-4" key={index}>

                            {game.myGameName !== "" &&
                            <div>
                              <h4 className="btn btn btn-warning">{game.myGameName}</h4>
                            </div>}

                            {game.myGameLanguage !== "" &&
                            <div>
                              <span className="font-weight-bold">Language: </span>
                              {game.myGameLanguage}
                            </div>}

                            {game.myGamePlayersMin !== undefined &&
                            <div>
                              <span className="font-weight-bold">Min players: </span>
                              {game.myGamePlayersMin}
                            </div>}

                            {game.myGamePlayersMax !== undefined &&
                            <div>
                              <span className="font-weight-bold">Max players: </span>
                              {game.myGamePlayersMax}
                            </div>}

                            {game.myGameCategory !== "" &&
                            <div>
                              <span className="font-weight-bold">Category: </span>
                              {game.myGameCategory}
                            </div>}
                          </div>
                          )
                        })}
                                        
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })}

             </div>
        </div>
      </div>
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