import React, { Component } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import BoardPage from '../BoardPage/BoardPage';
import LoginPage from '../Login/LoginPage';
import SignupPage from '../Signup/SignupPage'
<<<<<<< HEAD
import Logout from '../Logout/Logout';

=======
import Images from '../../components/Images/Images.jsx'
// import ImageUploader from 'react-images-upload';
>>>>>>> ead7a725c65505fdcececd12165a4291495d181e


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
            <Route path='/auth' render={(props) => (
              <AuthPage setUserInState={this.setUserInState} {...props}/>
            )}/>
            <Route path='/login' render={(props) => (
              <LoginPage setUserInState={this.setUserInState} {...props}/>
            )}/>
            <Route path='/signup' render={(props) => (
              <SignupPage setUserInState={this.setUserInState} {...props}/>
<<<<<<< HEAD
            )}/>
            <Route path='/home' render={(props) => (
              <Logout {...props}/>
=======
>>>>>>> ead7a725c65505fdcececd12165a4291495d181e
            )}/>
            <Images />
            <Redirect to='/home' />
          </Switch>
      </div>
    );
  }
}

export default App;
