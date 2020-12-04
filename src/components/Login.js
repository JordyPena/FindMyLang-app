import React, { Component } from "react";


// const URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PROD_URL
//     : "http://localhost:9000";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: "",
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
  
    fetch(`http://localhost:9000/api/accounts/account`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("this is login", data)
      this.props.handleSuccessfulAuth(data)
      

    })
     
  };

  // .then((response) => {
  //   if (response.status === 404) {
  //       throw Error();
  //   }
  //   return response.json()})
  // .then((data) => {
  //   console.log("this is login", data)
  //   this.props.handleSuccessfulAuth(data)
  // })
  // .catch(error => {
  //   console.log("error log in");
  // })





  render() {
    
    return (
      <>
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

          <button type="submit">Login</button>
        </form>

      
      </>
    );
  }
}

export default Login;
