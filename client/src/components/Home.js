import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>home</h1>
                <Link to="/register">Register here!</Link>
            </div>
        )
    }
}
