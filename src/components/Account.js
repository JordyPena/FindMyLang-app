import React from "react";
import "../styling/Account.css";
import StoresList from "./StoresList";
const URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_URL
    : "http://localhost:9000";

function Account(props) {
  const handleLogoutClick = () => {
    props.handleLogout();
    props.history.push("/");
  };

  
  const handleClick = (favorite_id) => {
    console.log("line 12 in account", favorite_id)
    const url = `${URL}/api/accounts/favorite/${favorite_id}`
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
        const newFavs = props.favorites.filter((favorite) => {
          return favorite.id !== favorite_id
        })
        console.log(newFavs)
        props.setFavorites(newFavs)
        
      }
    })
  }

  return (
    <>
      <section className="username">
        <p>Hi, {props.user.username} </p>
        <button onClick={() => handleLogoutClick()}>Logout</button>
      </section>

      <section className="favorites">
        <p>Favorites</p>
        <div className="list">
          <ul>
            {props.favorites.map((favorite, idx) => {
              return props.stores.map((store) => {
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
                      <button onClick={() => handleClick(favorite.id)}>Delete</button>
                    </li>
                  );
              });
            })}
            {console.log("this is line 35", props)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Account;
