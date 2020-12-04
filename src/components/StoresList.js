import "../styling/Results.css";
import React from "react";

// const URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PROD_URL
//     : "http://localhost:9000";

function StoresList(props) {
  //on click handler
  // than post to favs table
  // than go to account and do a get to grab the favs for the mathing id of account
  const handleClick = (store_id) => {
    console.log(props);
    let accounts_id = props.user.id;
    console.log(accounts_id);
    let data = { accounts_id, store_id };
    if (accounts_id === undefined) {
      alert("Create an account to add a favorite");
      return;
    }

    fetch(`https://mighty-everglades-36378.herokuapp.com/api/accounts/favorite`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is fav post", data);
      });
  };
  return (
    <>
      <section className="results">
        <div className="list">
          <h3>Results</h3>
          {props.stores.map((store, idx) => {
            return (
              <div key={idx}>
                <p>{store.name}</p>
                <p>{store.street_num}</p>
                <p>{store.street}</p>
                <p>{store.suite || ""}</p>
                <p>
                  {store.city}, {store.state} {store.zip}
                </p>
                <button onClick={() => handleClick(store.id)}>Fav</button>
              </div>
            );
          })}
        </div>
        <div className="map">{props.Map}</div>
      </section>
    </>
  );
}

export default StoresList;
