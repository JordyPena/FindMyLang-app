import React from "react";
import Login from "../components/Login";
import StoresList from "./StoresList";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";
import Signup from "./Signup";
import Footer from "./Footer";
import Geo from "./Geo"

function Home(props) {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/account");
  };

  return (
    <>
      <h3>isLoggedIn: {props.isLoggedIn ? "true" : "false"}</h3>
      

      <LanguageSelector
        setLanguage={props.setLanguage}
        languages={props.languages}
      />

      {props.isLoggedIn ? null : (
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          isLoggedIn={props.isLoggedIn}
        />
      )}

      {props.isLoggedIn ? null
      : (<Signup handleSuccessfulAuth={handleSuccessfulAuth} />)}


      <StoresList stores={props.stores} user={props.user} language={props.language}
      Map={<Geo stores={props.stores}/>}/>


      
    </>
  );
}

export default Home;
