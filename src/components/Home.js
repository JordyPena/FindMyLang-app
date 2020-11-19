import React from "react";
import Login from "../components/Login";
import StoresList from "./StoresList";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";
import Signup from "./Signup";
import Footer from "./Footer";
import { Route } from "react-router-dom";

function Home(props) {
  const handleSuccessfulAuth = (data, favorites) => {
    props.handleLogin(data, favorites);
    props.history.push("/account");
  };

  return (
    <>
      <h3>isLoggedIn: {props.isLoggedIn ? "true" : "false"}</h3>
      <Nav />

      <LanguageSelector
        setLanguage={props.setLanguage}
        languages={props.languages}
      />

      {props.isLoggedIn ? null
      : (<Signup handleSuccessfulAuth={handleSuccessfulAuth} />)}


      <StoresList stores={props.stores} user={props.user} />

      {props.isLoggedIn ? null : (
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          isLoggedIn={props.isLoggedIn}
        />
      )}

      <Footer />
    </>
  );
}

export default Home;
