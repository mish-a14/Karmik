import React, { Component } from "react";
import "./App.css";
import AuthPage from '../AuthPage/AuthPage'
import { Route, Switch } from "react-router";

class App extends Component {

  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }


  render() {
    return(
      <div>
        <div>Karmik</div>
        { this.state.user ?
          <Switch>
            <Route/>
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        } 
      </div>
    );
  }
}


export default App;

