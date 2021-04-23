import React, { Component } from "react";
import "./App.css";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import Signup from "../Signup/Signup.jsx";
import Login from "../Login/Login.jsx";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import BoardPage from '../BoardPage/BoardPage';



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
    return(
      <div className="App">
          <Switch>
            <Route path='/home' render={(props) => (
              <HomePage {...props}/> 
            )}/>
            <Route path='/board' render={(props) => (
              <BoardPage {...props}/>
            )}/>
            <Redirect to='/home' />
          </Switch>
      </div>
    );
  }
}

export default App;
