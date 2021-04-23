import React from "react";
import "./AuthPage.css";
// import Logo from '../../components/Logo/Logo';
import LoginForm from "../../Components/LoginForm/LoginForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

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
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
      </main>
    );
  }
}
