import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  setUserInState = incomingUserData => {
    this.setState({ user: incomingUserData });
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <h1>Karmik</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleChange}
            required
          />
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
    );
  }
}

export default App;
