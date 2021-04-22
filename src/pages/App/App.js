import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }


  render() {
    return(
      <div>Karmik</div>
    );
  }
}


export default App;

