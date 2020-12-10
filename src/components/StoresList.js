import "../styling/Results.css";
import React from "react";

const URL = process.env.REACT_APP_DB_URL;

function StoresList(props) {
  const handleClick = (store_id) => {
    let accounts_id = props.user.id;

    let data = { accounts_id, store_id };
    if (accounts_id === undefined) {
      alert("Create an account to add a favorite");
      return;
    }

    fetch(`${URL}/api/accounts/favorite`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {});
  };
  return (
    <div className="store-list">
      <section className="results">
        <h2 className="h3">Results</h2>
        <div className="list">
          {props.stores.map((store, idx) => {
            return (
              <div key={idx} className="store">
                <h3 className="store-name">{store.name}</h3>
                <p>&nbsp; {store.street_num}</p>
                <p>&nbsp; {store.street}</p>
                <p>&nbsp; {store.suite || ""}</p>
                <p>
                  &nbsp; {store.city}, {store.state} {store.zip}
                </p>
                &nbsp;{" "}
                <button
                  onClick={() => handleClick(store.id)}
                  className="fav-button"
                >
                  Fav
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default StoresList;
