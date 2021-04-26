import { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './LoginPage.css'

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
      this.props.history.push("/board")

    } catch (err) {
      console.log("LoginPage error", err)
      this.setState({ error: 'Login Failed - Try Again' });
    }
  }

  render() {
    return (
      <div className="login">
        <nav>
          <div className="logo">
          <Link to="/home">karmik</Link>
          </div>
        </nav>
        <div className="contain">
        <div className="form">
          <form onSubmit={this.handleSubmit} autoComplete="off" >
            <div>
            <label>Email</label>
            </div>
            <div>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div>
            <label>Password</label>
            </div>
            <div>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="form-btn">
            <button type="submit">log in</button>
            </div>
          </form>
        </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}