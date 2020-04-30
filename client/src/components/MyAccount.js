import React, { Component } from "react";
import styles from "./MyAccount.css";
import EditProfile from "./EditProfile";
import EditMyGames from "./EditMyGames";

export default class MyAccount extends Component {
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
      return (
        <div>
          <div className="container">
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
      );
  }
}
