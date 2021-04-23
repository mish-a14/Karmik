import React, { Component } from "react";
import "./App.css";
import AuthPage from '../AuthPage/AuthPage'
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import BoardPage from '../BoardPage/BoardPage';

class App extends React.Component {


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

