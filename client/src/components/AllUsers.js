import React, { Component, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';


class AllUsers extends Component {

    handleLogin = e => {
        const [user, setUser] = useState(false);
        e.preventDefault();
        setUser(true);
      }

      logout = () => {
        localStorage.removeItem('jwtToken');
        //window.location.reload();
        this.props.history.push('/login');
      }


    render() {
        return (
            <div>
                <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ALL USERS DASHBOARD &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>My Account</th>
                  <th>Notice Board</th>
                  <th>Settings</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default withRouter(AllUsers);