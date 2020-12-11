import React, { Component } from "react";
import "../styling/Login.css";

const URL = process.env.REACT_APP_DB_URL;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "demo",
      password: "1111",
      loginErrors: "",
      modal: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hideModal = (event) => {
    event.preventDefault();
    this.setState({
      modal: false,
    });
  };

  showModal = () => {
    this.setState({
      modal: true
    })
  }

  handleSubmit = (event) => {
    const { username, password } = this.state;
    const data = { username, password };
    event.preventDefault();

    fetch(`${URL}/api/accounts/account`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.showModal()
        } else {

          this.props.handleSuccessfulAuth(data);
        }

        

      })
      .catch((err) => {
        console.log(err)
      })
  };

  render() {
    const modal = (
      <div className="modal-container">
        <form className="modal" onSubmit={this.hideModal}>
        <p>Username doesn't exist please register</p>
        <button
          className="modal-button"
          type="submit"
        >
          Okay
        </button>
      </form>
      </div>
      
    );
    return (
      <>
        {this.state.modal ? modal : ""}

        <form onSubmit={this.handleSubmit} className="login-bar">
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
         

          <button type="submit" className="login-Button">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
