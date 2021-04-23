import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch } from "react-router-dom";
=======
import AuthPage from '../AuthPage/AuthPage'
import { Route, Switch, Redirect } from "react-router-dom";
>>>>>>> master

class App extends Component {
  state = {
    user: null,
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response to get jwt from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  setUserInState = incomingUserData => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.setState({ user: userDoc });
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value, error: "" });
  };

  render() {
    //// TODO:  decalare on setUser

    return (
      <div>
        <div>Karmik</div>
        <AuthPage setUserInState={this.setUserInState} />
        {this.state.user ? (
          <Switch>
            <Route />
          </Switch>
        ) : (
          <h1>Ope</h1>
        )}
      </div>
    );
  }
}

export default App;
