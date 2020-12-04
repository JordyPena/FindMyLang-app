import React, { Component } from "react";
import {Redirect} from "react-router-dom"
import "../styling/Account.css";

// const URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PROD_URL
//     : "http://localhost:9000";

  class Account extends Component {
    constructor(props) {
      super(props)
      this.state = {
        favorites: []
      }
    }

    componentDidMount() {
      if (!Object.keys(this.props.user).length) {
        return;
      }
      let accounts_id = this.props.user.id
      fetch(`http://localhost:9000/api/accounts/favorite/${accounts_id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: process.env.REACT_APP_TOKEN,
        },
      })
      .then((response) => {
        return response.json()
      })
      .then((favorites) => {
        this.setState({
          favorites: favorites
        })
      })
    }

    handleLogoutClick = () => {
      this.props.handleLogout();
      this.props.history.push("/");
    };
  
    
    handleClick = (favorite_id) => {
      console.log("line 12 in account", favorite_id)
      const url = `http://localhost:9000/api/accounts/favorite/${favorite_id}`
      console.log("this is url line 14", url)
      fetch(`${url}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: process.env.REACT_APP_TOKEN,
        },
      })
      .then((response) => {
        if (response.ok) {
          const newFavs = this.props.favorites.filter((favorite) => {
            return favorite.id !== favorite_id
          })
          console.log(newFavs)
          this.setState({
            favorites: newFavs
          })
          this.props.history.push("/account")
        }
      })
    }
  

    render() {
      return (
        <>
        {!Object.keys(this.props.user).length &&
        <Redirect to="/"/>}
          <section className="username">
            <p>Hi, {this.props.user.username} </p>
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
          </section>
    
          <section className="favorites">
            <p>Favorites</p>
            <div className="list">
              <ul>
                { this.state.favorites && (
                this.state.favorites.map((favorite, idx) => {
                  return this.props.stores.map((store) => {
                    if (store.id === favorite.store_id)
                      return (
                        <li key={idx}>
                          <p>{store.name}</p>
                          <p>{store.street_num}</p>
                          <p>{store.street}</p>
                          <p>{store.suite || ""}</p>
                          <p>
                            {store.city}, {store.state} {store.zip}
                          </p>
                          <p>{store.languages}</p>
                          <button onClick={() => this.handleClick(favorite.id)}>Delete</button>
                        </li>
                      );
                  });
                }))}
                {console.log("this is line 35", this.props)}
              </ul>
            </div>
          </section>
        </>
      );
    }
  }

export default Account;






