import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../styling/Account.css";

const URL = process.env.REACT_APP_DB_URL;

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  componentDidMount() {
    if (!Object.keys(this.props.user).length) {
      return;
    }
    let accounts_id = this.props.user.id;
    fetch(`${URL}/api/accounts/favorite/${accounts_id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((favorites) => {
        this.setState({
          favorites: favorites,
        });
      });
  }

  handleLogoutClick = () => {
    this.props.handleLogout();
    this.props.history.push("/");
  };

  handleClick = (favorite_id) => {
    const url = `${URL}/api/accounts/favorite/${favorite_id}`;

    fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    }).then((response) => {
      if (response.ok) {
        const newFavs = this.state.favorites.filter((favorite) => {
          return favorite.id !== favorite_id;
        });

        this.setState({
          favorites: newFavs,
        });
        this.props.history.push("/account");
      }
    });
  };

  render() {
    return (
      <>
        {!Object.keys(this.props.user).length && <Redirect to="/" />}
        <section className="username-style">
          <h1 className="username">Hi {this.props.user.username} </h1>
          <button
            className="logout-style"
            onClick={() => this.handleLogoutClick()}
          >
            Logout
          </button>
        </section>

        <h2 className="fav-header">Favorites</h2>
        <section>
          <div className="list">
            <ul>
              {this.state.favorites &&
                this.state.favorites.map((favorite, idx) => {
                  return this.props.stores.map((store) => {
                    if (store.id === favorite.store_id)
                      return (
                        <li key={idx} className="fav-style">
                          <p>{store.name}</p>
                          <p>{store.street_num}</p>
                          <p>{store.street}</p>
                          <p>{store.suite || ""}</p>
                          <p>
                            {store.city}, {store.state} {store.zip}
                          </p>
                          <p>{store.languages}</p>
                          <button
                            className="delete"
                            onClick={() => this.handleClick(favorite.id)}
                          >
                            Delete
                          </button>
                        </li>
                      );
                  });
                })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Account;
