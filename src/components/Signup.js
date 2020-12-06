import React, { Component } from "react";


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
    .then((response) => response.json())
    .then((data) => {
      console.log("this is registration", data)
      if (data.username !== "" &&
      data.password !== "" )
      this.props.handleSuccessfulAuth(data)
    })
     
  };






  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Register</label>
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

          <button type="submit">Register</button>
        </form>

      
      </>
    );
  }
}

export default Signup;
