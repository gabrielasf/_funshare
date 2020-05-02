// import React, { Component, useState } from 'react';
// import { withRouter } from 'react-router';
// import LogIn from './LogIn';


// class AllUsers extends Component {

//     handleLogin = e => {
//         const [user, setUser] = useState(false);
//         e.preventDefault();
//         setUser(true);
//       }

//       logout = () => {
//         localStorage.removeItem('jwtToken');
//         //window.location.reload();
//         this.props.history.push('/login');
//       }


//     render() {

//         if(localStorage.getItem('jwtToken')){
        
// return (

// <div className="allusercont container mt-4">
// <div className="row">
//         <div className="col-lg-4">
//            <div className="profile-card-4 z-depth-3">
//             <div className="card">
//               <div className=" bluecard card-body text-center bg-primary rounded-top">
//                <div className="user-box">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Geek_Picnic_%28Moscow%3B_2014-01-26%29_28.JPG" alt="user avatar"/>
//               </div>
//               <h5 className="mb-1 text-white">Liz González</h5>
//               <h6 className="text-light">Barcelona</h6>
//              </div>
//               <div className="card-body">
//                 <ul className="list-group shadow-none">
//                 <li className="list-group-item">
//                   <div className="list-icon">
//                     <i className="fa fa-phone-square"></i>
//                   </div>
//                   <div className="list-details">
//                     <span>Lili</span>
//                     <small>Nickname</small>
//                   </div>
//                 </li>
//                 <li className="list-group-item">
//                   <div className="list-icon">
//                     <i className="fa fa-envelope"></i>
//                   </div>
//                   <div className="list-details">
//                     <span>liz@bla.com</span>
//                     <small>Email Address</small>
//                   </div>
//                 </li>
//                 <li className="list-group-item">
//                   <div className="list-icon">
//                     <i className="fa fa-globe"></i>
//                   </div>
//                   <div className="list-details">
//                     <span><a href="/about" className="btn btn-warning btn-sm m-0 p-0">funshare® User Info</a> </span>
                
//                   </div>
//                 </li>
//                 </ul>

//                 <div className="row text-center mt-4">
//                     <div className="col p-2">
//                     <button className="btn btn-primary" onClick={this.logout}>Logout</button> 
//                     </div>
//                     <div className="col p-2">
//                     </div>
//                     <div className="col p-2">
//                    </div>
//                  </div>
                
                 
//                 </div>


//                <div className="card-footer text-center">
//                  <a href="javascript:void()" className="btn-social btn-facebook waves-effect waves-light m-1"><i className="fa fa-facebook"></i></a>
//                  <a href="javascript:void()" className="btn-social btn-google-plus waves-effect waves-light m-1"><i className="fa fa-google-plus"></i></a>
//                  <a href="javascript:void()" className="list-inline-item btn-social btn-behance waves-effect waves-light"><i className="fa fa-behance"></i></a>
//                  <a href="javascript:void()" className="list-inline-item btn-social btn-dribbble waves-effect waves-light"><i className="fa fa-dribbble"></i></a>
//                </div>
//              </div>
//            </div>
//         </div>
//         <div className="col-lg-8">
//            <div className="card z-depth-3">
//             <div className="card-body">
//             <ul className="nav nav-pills nav-pills-primary nav-justified">
//                 <li className="nav-item">
//                     <a href="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active show"><i className="icon-user"></i> <span className="hidden-xs">Profile</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-envelope-open"></i> <span className="hidden-xs">Messages</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link"><i className="icon-note"></i> <span className="hidden-xs">Edit</span></a>
//                 </li>
//             </ul>
//             <div className="tab-content p-3">
//                 <div className="tab-pane active show" id="profile">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <h6>About</h6>
//                             <p>
//                                 Web Designer, UI/UX Engineer
//                             </p>
//                             <h6>Hobbies</h6>
//                             <p>
//                                 Indie music, skiing and hiking. I love the great outdoors.
//                             </p>
//                         </div>
//                         <div className="col-md-6">
//                             <h6>My Games</h6>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Rummikub</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Monopoly</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Scrabble</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Cluedo</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Catan</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Risk</a>
//                             <a href="javascript:void();" className="badge badge-dark badge-pill">Battleship</a>
//                             <hr/>
//                             <span className="badge badge-primary"><i className="fa fa-user"></i> 43 Connections</span>
//                             <span className="badge badge-success"><i className="fa fa-cog"></i> 15 Events</span>
//                             <span className="badge badge-danger"><i className="fa fa-eye"></i> 4 Groups</span>
//                         </div>
//                         <div className="col-md-12">
//                             <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
//                             <table className="table table-hover table-striped">
//                                 <tbody>                                    
//                                     <tr>
//                                         <td>
//                                             <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="tab-pane" id="messages">
//                     <div className="alert alert-info alert-dismissible" role="alert">
//     			   <button type="button" className="close" data-dismiss="alert">×</button>
// 				    <div className="alert-icon">
// 					 <i className="icon-info"></i>
// 				    </div>
// 				    <div className="alert-message">
// 				      <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
// 				    </div>
//                   </div>
//                     <table className="table table-hover table-striped">
//                         <tbody>                                    
//                             <tr>
//                                 <td>
//                                    <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                    <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                    <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus. 
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                    <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus. 
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                    <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros. 
//                                 </td>
//                             </tr>
//                         </tbody> 
//                     </table>
//                 </div>
//                 <div className="tab-pane" id="edit">
//                     <form>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">First name</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="text" value="Mark"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Last name</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="text" value="Jhonsan"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Email</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="email" value="mark@example.com"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Change profile</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="file"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Website</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="url" value=""/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Address</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="text" value="" placeholder="Street"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label"></label>
//                             <div className="col-lg-6">
//                                 <input className="form-control" type="text" value="" placeholder="City"/>
//                             </div>
//                             <div className="col-lg-3">
//                                 <input className="form-control" type="text" value="" placeholder="State"/>
//                             </div>
//                         </div>
                       
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Username</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="text" value="jhonsanmark/"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Password</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="password" value="11111122333"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
//                             <div className="col-lg-9">
//                                 <input className="form-control" type="password" value="11111122333"/>
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-lg-3 col-form-label form-control-label"></label>
//                             <div className="col-lg-9">
//                                 <input type="reset" className="btn btn-secondary" value="Cancel"/>
//                                 <input type="button" className="btn btn-primary" value="Save Changes"/>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//       </div>
//       </div>
        
//     </div>
// </div>

// )} else {

//     return (

//     <div id="gameover" className="container-fluid">
//     <img src="https://miro.medium.com/max/1200/1*sgx0PeiAxkB5qUnbI79S-g.png" className="mx-auto d-block"/>
//     <h1 className="auth text-center">Error 401 - Unauthorized</h1>
//     <br/>
//     <a href="/login" className="btn btn-light btn-lg d-block mt-10">PRESS HERE TO START A NEW GAME</a> 
//     <br/>
//     <br/>
//     <br/>
//     </div> 
    
//     )}
// }

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