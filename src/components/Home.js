import React from "react";
import Login from "../components/Login";
import StoresList from "./StoresList";
import LanguageSelector from "./LanguageSelector";
import Signup from "./Signup";
import Geo from "./Geo";
import FavoritesContext from "./FavoritesContext";

function Home(props) {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/account");
  };

  return (
    <FavoritesContext.Consumer>
      { (context) => {
        return(
          <div>
            <LanguageSelector
        setLanguage={props.setLanguage}
        languages={props.languages}
      />

      {props.isLoggedIn ? null : (
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          isLoggedIn={props.isLoggedIn}
          props={props}
          user={props.user}
        />
      )}

      {props.isLoggedIn ? null : (
        <Signup handleSuccessfulAuth={handleSuccessfulAuth} />
      )}

      <Geo stores={props.stores} />
      <StoresList
        stores={props.stores}
        user={props.user}
        language={props.language}
        HomeFavs={context.HomeFavs}
      />
          </div>
        )
      }}
      
    </FavoritesContext.Consumer>
  );
}

export default Home;
