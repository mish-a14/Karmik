import React from "react";
import "./AuthPage.css";
// import Logo from '../../components/Logo/Logo';
import LoginPage from "../../pages/Login/LoginPage.jsx";
import SignUpPage from "../../pages/Signup/SignupPage.jsx";

export default class AuthPage extends React.Component {
  state = {
    showLogin: false
  };

  render() {
    return (
      <main className="AuthPage">
        <div>
          <h3
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin ? "LOG IN" : "SIGN UP"}
          </h3>
        </div>
        {this.state.showLogin ? (
          <LoginPage setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpPage setUserInState={this.props.setUserInState} />
        )}
      </main>
    );
  }
}
