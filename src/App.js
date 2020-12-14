import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import "./index.css";

import Account from "./components/Account";

import Home from "./components/Home";

const URL = process.env.REACT_APP_DB_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      stores: [],
      language: "All",
      languages: [],
      isLoggedIn: false,
      user: {},
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${URL}/api/stores`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())

      .then((data) => {
        //grab every store
        //get the language of each store
        //remove white space
        //breakdown each set of strings into individual strings
        //grab each individual string
        //add it into langs array
        let langs = [];
        data.forEach((store) => {
          store.languages
            .trim()
            .split(/,\s+/)
            .forEach((language) => {
              langs.push(language);
            });
        });
        langs = [...new Set(langs)];

        this.setState({
          stores: data,
          languages: langs,
        });
      })
      .catch((error) => {
        console.error({ error });
      }); 
  }

  setFavorites = () => {
    if (!Object.keys(this.state.user).length) {
      return;
    }
    let accounts_id = this.state.user.id;
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
        console.log("favs in fetch on login", favorites)
        this.setState({
          
          favorites: favorites,
        });
        
      });
  }

  setLanguage = (language) => {
    this.setState({
      language: language,
    });
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
          user: data,
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    let stores = this.state.stores;
    if (this.state.language !== "All") {
      stores = stores.filter((store) => {
        return store.languages.includes(this.state.language);
      });
    }
    return (
      <>
        <Nav user={this.state.user} />
        <main className="container">
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  {...props}
                  stores={stores}
                  setLanguage={this.setLanguage}
                  languages={this.state.languages}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                  user={this.state.user}
                  language={this.state.language}
                  favorites={this.state.favorites}
                />
              );
            }}
          />

          <Route exact path="/about" component={About} />

          <Route
            path="/account"
            render={(props) => {
              return (
                <Account
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  stores={this.state.stores}
                  favorites={this.state.favorites}
                />
              );
            }}
          />

          <Route exact path="/landingpage" component={LandingPage} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
