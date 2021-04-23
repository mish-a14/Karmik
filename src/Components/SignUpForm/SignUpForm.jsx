import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm:'',
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
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
            <form autoComplete="off" >
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm Password</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
                <button type="submit" disabled={this.state.confirm !== this.state.password}>All Set!</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}