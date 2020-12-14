import "../styling/Results.css";
import React, { Component } from "react";


const URL = process.env.REACT_APP_DB_URL;

class StoresList extends Component {
  constructor(props) {
    super(props);
    
  }
componentDidMount() {
  console.log("favs is working", this.props.HomeFavs)
}
  handleClick = (store_id) => {
    let accounts_id = this.props.user.id;

    let data = { accounts_id, store_id };
    if (accounts_id === undefined) {
      //change to a modal not a alert
      alert("Create an account to add a favorite");
      return;
    }
    //get favorites from account using context
//if data.store_id === favorites.store_id
// modal store already in favorites
    if (store_id === this.props.HomeFavs.favorites) {
      console.log(this.props.HomeFavs)
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
      .then((data) =>{}
      );
  };

  

  
  
  
  render() {
    
    return (
      <div className="store-list">
        <section className="results">
          <h2 className="h3">Results</h2>
          <div className="list">
            {this.props.stores.map((store, idx) => {
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
                    onClick={() => this.handleClick(store.id)}
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
}

export default StoresList;
