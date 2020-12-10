import React, { Component } from "react";
import "../styling/Signup.css"

const URL = process.env.REACT_APP_DB_URL

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const {username, password} = this.state
    const data = {username, password}
    event.preventDefault();
    fetch(`${URL}/api/accounts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
    .then((response) => {
      console.log("this is response", response)
      if (response.status === 401) {
        console.log("something")
        alert('user already exist')
        throw new Error('401 error')
      }
      if (response.status === 400) {
        console.log("400")
        throw new Error('400 error')
      }
        return response.json()
    })
    .then((data) => {
      console.log("this is registration", data)
      this.props.handleSuccessfulAuth(data)
    })
     .catch((err) => {
      console.error(err)
     })
  };






  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="signup">
      
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit" className="signup-Button">Register</button>
        </form>

      
      </>
    );
  }
}

export default Signup;
