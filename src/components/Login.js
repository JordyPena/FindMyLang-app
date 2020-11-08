import React, { Component } from "react";
import "../styling/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <form className="login-content">
          <div className="login"> 
          <label>Log In</label>
          <input
            type="text"
            name="email"
            value=""
            onChange=""
            placeholder="Email"
          />
          </div>
          <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value=""
            onChange=""
            placeholder="Password"
          />
         
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
