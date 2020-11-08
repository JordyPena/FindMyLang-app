import React, { Component } from 'react'
import "../styling/Login.css"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <>
        <form
          className="login-bar">
          <label>
            Log In
          </label>
          <input
            type="text"
            name="email"
            value=""
            onChange=""
            placeholder="Email"
          />
          <label>
            Password
          </label>
          <input
            type="text"
            name="password"
            value=""
            onChange=""
            placeholder="Password"
          />
          <button
            className="login-button"
            type="submit"
          >
            Login
          </button>
        </form>
      </>
    )
  }
}

export default Login