import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import Login from "./components/Login";
import Results from "./components/Results";
import Account from "./components/Account";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        
        <Route exact path="/home" component={Nav}/>
        <Route exact path="/home" component={SearchBar}/>
        <Route exact path="/home" component={Results}/>  
        <Route exact path="/home" component={Footer}/>

        <Route exact path="/about" component={Nav}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/about" component={Footer}/>

        <Route exact path="/account" component={Nav}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/account" component={Footer}/>

        <Route exact path="/login" component={Nav}/>
        <Route exact path="/login" component={Login}/>  
        <Route exact path="/login" component={Footer}/>  

        <Route exact path="/" component={Nav}/>
        <Route exact path="/" component={LandingPage}/>

      
      </>
    );
  }
}

export default App;
