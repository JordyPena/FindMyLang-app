import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";


import Account from "./components/Account";

import Home from "./components/Home";

const URL = process.env.REACT_APP_DB_URL

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
    };
  }

  /////get stores by language
  componentDidMount() {
    
    console.log("in fetch", URL)
    fetch(`${URL}/api/stores`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response)=> response.json())
    
      .then((data) => {
        console.log("this is data", data)
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
        console.log("lang is", langs);
        this.setState({
          stores: data,
          languages: langs,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  setLanguage = (language) => {
    this.setState({
      language: language,
    });
    console.log("selected language is", language);
  };

  handleLogin = (data, favorites) => {
    this.setState({
      isLoggedIn: true,
      user: data,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  

  

 
  render() {
     
    let stores = this.state.stores
    if (this.state.language !== "All") {
      stores = stores.filter((store) => {
           return store.languages.includes(this.state.language);
         })
    }
    return (
      <>
        <Nav user={this.state.user}/>
        
        <Route
          exact
          path="/"
          render={(props) => {
            console.log("this is line 74", this.state);
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
               
              />
            );
          }}
        />
       

        

       
        <Route exact path="/landingpage" component={LandingPage}/>
       
       
        <Footer/>
      </>
    );
  }
}

export default App;
