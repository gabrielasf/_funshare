/*import React, { Component } from "react";
import styles from "./MyAccount.css";
import EditProfile from "./EditProfile";
import EditMyGames from "./EditMyGames";
import { withRouter } from "react-router-dom";

 class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      email: "",
      avatar: "",
      mode: "profile"
    };
  }

  componentDidMount() {
    this.getUserById(this.props.userId);
  }

  getUserById = (id) => {
    fetch(`/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          name: response.name,
          nickname: response.nickname,
          email: response.email,
          avatar: response.avatar
        });
      });
  };

  toggleView = () => {
    if (this.state.mode === "profile") {
      return <EditProfile userId={this.props.userId} />
    } else if (this.state.mode === "games") {
      return <EditMyGames userId={this.props.userId}/>
    }
  }

  seeProfile = () => {
    this.setState({mode: "profile"})
  }

  seeGames = () => {
    this.setState({mode: "games"})
  }
  
  render() {

    if(localStorage.getItem('jwtToken')){

      return (
        <div>
          <div className="container-fluid myaccount">
            <div className="view-account">
              <section className="module">
                <div className="module-inner">
                  <div className="side-bar">
                    <div className="user-info">
                      <img
                        className="img-profile img-circle img-responsive center-block"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                      <ul className="meta list list-unstyled">
                        <li className="name">
                          {this.state.name}
                        </li>
                        <li> <label className="label label-info">
                           {this.state.nickname}
                          </label>
                          </li>
                        <li className="email">
                          <a href="#">{this.state.email}</a>
                        </li>
                      </ul>
                    </div>
                    <nav className="side-menu">
                      <ul className="nav">
                        <li className={this.state.mode === "profile" ? "active" : ""}>
                          <a onClick={this.seeProfile} href="#">
                            <span className="fa fa-user"></span> Profile
                          </a>
                        </li>
                        <li className={this.state.mode === "games" ? "active" : ""}>
                          <a onClick={this.seeGames} href="#">
                            <span className="fa fa-cog"></span> My games
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="content-panel">
                    {this.toggleView()}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      
      )}else {

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
export default withRouter(MyAccount); */

import React, { Component, useState } from "react";
import { withRouter } from "react-router";
import styles from "./MyAccount.css";
import LogIn from "./LogIn";
import EditProfile from "./EditProfile";
import EditMyGames from "./EditMyGames";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      email: "",
      avatar: "",
      mode: "profile",
    };
  }

  componentDidMount() {
    this.getUserById(this.props.userId);
  }

  getUserById = (id) => {
    fetch(`/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          name: response.name,
          nickname: response.nickname,
          email: response.username,
          avatar: response.avatar,
        });
      });
  };

  handleLogin = (e) => {
    const [user, setUser] = useState(false);
    e.preventDefault();
    setUser(true);
  };

  logout = () => {
    localStorage.removeItem("jwtToken");
    //window.location.reload();
    this.props.history.push("/login");
  };

  render() {
    if (localStorage.getItem("jwtToken")) {
      return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
            <div class="container">
              <a class="navbar-brand" href="#">
              funshare®
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <div className="col p-2">
                    <button
                      className="btn btn-primary"
                      onClick={this.logout}
                    >
                      Logout
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

                
                <div className="allusercont container mt-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="profile-card-4 z-depth-3">
                        <div className="card">
                          <div className=" bluecard card-body text-center bg-primary rounded-top">
                            <div className="user-box">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Geek_Picnic_%28Moscow%3B_2014-01-26%29_28.JPG"
                                alt="user avatar"
                              />
                            </div>
                            <h5 className="mb-1 text-white">
                              {this.state.name}
                            </h5>
                            <h6 className="text-light">{this.state.city}</h6>
                          </div>
                          <div className="card-body">
                            <ul className="list-group shadow-none">
                              <li className="list-group-item">
                                <div className="list-icon">
                                  <i className="fa fa-phone-square"></i>
                                </div>
                                <div className="list-details">
                                 <span>{this.state.nickname}</span>
                                <small>Nickname</small>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="list-icon">
                                  <i className="fa fa-envelope"></i>
                                </div>
                                <div className="list-details">
                                  <span>{this.state.email}</span>
                                  <small>Email</small>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="list-icon">
                                  <i className="fa fa-globe"></i>
                                </div>
                                <div className="list-details">
                                  <span>
                                    <a
                                      href="/about"
                                      className="btn btn-warning btn-sm m-0 p-0"
                                    >
                                      funshare® User Info
                                    </a>{" "}
                                  </span>
                                </div>
                              </li>
                            </ul>

                            <div className="row text-center mt-4">
                              <div className="col p-2">
                              </div>
                              <div className="col p-2"></div>
                              <div className="col p-2"></div>
                            </div>
                          </div>

                          <div className="card-footer text-center">
                            <a
                              href="javascript:void()"
                              className="btn-social btn-facebook waves-effect waves-light m-1"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                            <a
                              href="javascript:void()"
                              className="btn-social btn-google-plus waves-effect waves-light m-1"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                            <a
                              href="javascript:void()"
                              className="list-inline-item btn-social btn-behance waves-effect waves-light"
                            >
                              <i className="fa fa-behance"></i>
                            </a>
                            <a
                              href="javascript:void()"
                              className="list-inline-item btn-social btn-dribbble waves-effect waves-light"
                            >
                              <i className="fa fa-dribbble"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card z-depth-3">
                        <div className="card-body">
                          <ul className="nav nav-pills nav-pills-primary nav-justified">
                            <li className="nav-item">
                              <a
                                href="javascript:void();"
                                data-target="#profile"
                                data-toggle="pill"
                                className="nav-link active show"
                              >
                                <i className="icon-user"></i>{" "}
                                <span className="hidden-xs">Profile</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="javascript:void();"
                                data-target="#messages"
                                data-toggle="pill"
                                className="nav-link"
                              >
                                <i className="icon-envelope-open"></i>{" "}
                                <span className="hidden-xs">Messages</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="javascript:void();"
                                data-target="#edit"
                                data-toggle="pill"
                                className="nav-link"
                              >
                                <i className="icon-note"></i>{" "}
                                <span className="hidden-xs">Edit</span>
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content p-3">
                            <div className="tab-pane active show" id="profile">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>About</h6>
                                  <p>Web Designer, UI/UX Engineer</p>
                                  <h6>Hobbies</h6>
                                  <p>
                                    Indie music, skiing and hiking. I love the
                                    great outdoors.
                                  </p>
                                </div>
                                <div className="col-md-6">
                                  <h6>My Games</h6>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Rummikub
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Monopoly
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Scrabble
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Cluedo
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Catan
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Risk
                                  </a>
                                  <a
                                    href="javascript:void();"
                                    className="badge badge-dark badge-pill"
                                  >
                                    Battleship
                                  </a>
                                  <hr />
                                  <span className="badge badge-primary">
                                    <i className="fa fa-user"></i> 43
                                    Connections
                                  </span>
                                  <span className="badge badge-success">
                                    <i className="fa fa-cog"></i> 15 Events
                                  </span>
                                  <span className="badge badge-danger">
                                    <i className="fa fa-eye"></i> 4 Groups
                                  </span>
                                </div>
                                <div className="col-md-12">
                                  <h5 className="mt-2 mb-3">
                                    <span className="fa fa-clock-o ion-clock float-right"></span>{" "}
                                    Recent Activity
                                  </h5>
                                  <table className="table table-hover table-striped">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <strong>Abby</strong> joined ACME
                                          Project Team in{" "}
                                          <strong>`Collaboration`</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Gary</strong> deleted My
                                          Board1 in{" "}
                                          <strong>`Discussions`</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Kensington</strong> deleted
                                          MyBoard3 in{" "}
                                          <strong>`Discussions`</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>John</strong> deleted My
                                          Board1 in{" "}
                                          <strong>`Discussions`</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Skell</strong> deleted his
                                          post Look at Why this is.. in{" "}
                                          <strong>`Discussions`</strong>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane" id="messages">
                              <EditMyGames userId={this.props.userId}/>
                                
                            </div>
                            <div className="tab-pane" id="edit">
                              <EditProfile userId={this.props.userId}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
      );
    } else {
      return (
        <div id="gameover">
          <img
            src="https://miro.medium.com/max/1200/1*sgx0PeiAxkB5qUnbI79S-g.png"
            className="mx-auto d-block"
          />
          <h1 className="auth text-center">
            USERS ONLY - PLEASE{" "}
            <a href="/login" className="btn btn-danger btn-lg">
              LOG IN
            </a>{" "}
          </h1>
        </div>
      );
    }
  }
}

export default withRouter(MyAccount);
