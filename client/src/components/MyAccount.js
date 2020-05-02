import React, { Component, useState } from "react";
import { withRouter } from "react-router";
import styles from "./MyAccount.css";
import LogIn from "./LogIn";
import EditProfile from "./EditProfile";
import EditMyGames from "./EditMyGames";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
            <div className="container">
              <a className="navbar-brand" href="#">
                funshare®
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/allusers">
                      Players
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/event">
                      Events
                    </Link>
                  </li>
                  <div className="col p-2">
                    <button className="btn btn-primary" onClick={this.logout}>
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
                      <h5 className="mb-1 text-white">{this.state.name}</h5>
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
                        <div className="col p-2"></div>
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
                          data-target="#edit"
                          data-toggle="pill"
                          className="nav-link active show"
                        >
                          <i className="icon-note"></i>{" "}
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
                          <span className="hidden-xs">My games</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content p-3">
                      <div className="tab-pane" id="messages">
                        <EditMyGames userId={this.props.userId} />
                      </div>
                      <div className="tab-pane  active show" id="edit">
                        <EditProfile userId={this.props.userId} />
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
