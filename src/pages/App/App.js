import React, { Component } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import BoardPage from "../BoardPage/BoardPage";
import LoginPage from "../Login/LoginPage";
import SignupPage from "../Signup/SignupPage";
import Picture from "../../components/Picture/Picture.jsx";
import Logout from "../../components/Logout/Logout";
import BoardForm from "../../components/BoardForm/BoardForm";
import PictureForm from '../PictureForm/PictureForm';
// import ImageUploader from 'react-images-upload';

class App extends Component {
  state = {
    user: null
  };

  setUserBackToNull = () => {
    this.setState({ user: null });
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
      <div className="App">
        <Switch>
          {/* <BoardForm/>*/}
          {/* <Images />  */}
          <Route
            path="/picture"
            render={props => <Picture {...props} user={this.state.user} />}
          />

            <Route
            path="/pictureform"
            render={props => <PictureForm {...props} user={this.state.user} />}
          />

          <Route
            path="/boardform"
            render={props => <BoardForm {...props} user={this.state.user} />}
          />

          <Route path="/home" render={props => <HomePage {...props} />} />

          <Route
            path="/board"
            render={props => (
              <BoardPage
                setUserBackToNull={this.setUserBackToNull}
                {...props}
              />
            )}
          />
          <Route
            path="/auth"
            render={props => (
              <AuthPage setUserInState={this.setUserInState} {...props} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginPage setUserInState={this.setUserInState} {...props} />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <SignupPage setUserInState={this.setUserInState} {...props} />
            )}
          />

          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
