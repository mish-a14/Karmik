import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
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
