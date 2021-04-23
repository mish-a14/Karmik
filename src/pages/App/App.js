import React, { Component } from "react";
import "./App.css";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import Signup from "../Signup/Signup.jsx";
import Login from "../Login/Login.jsx";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    user: null
  };

  setUserInState = userDoc => {
    this.setState({ user: userDoc });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      this.setState({ user: userDoc });
    }
  }

  render() {
    return (
      <div>
        <h1>Karmik</h1>
        <NavBar user={this.state.user} />

        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />

          <Route
            path="/signup"
            render={props => (
              <Signup {...props} putUserIntoState={this.putUserIntoState} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
