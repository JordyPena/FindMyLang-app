import "../styling/Results.css";
import React, { Component } from "react";

const URL = process.env.REACT_APP_DB_URL;

class StoresList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      favModal: false,
    };
  }

  hideModal = (event) => {
    event.preventDefault();
    this.setState({
      modal: false,
    });
  };

  showModal = () => {
    this.setState({
      modal: true,
    });
  };

  hideFavModal = (event) => {
    event.preventDefault();
    this.setState({
      favModal: false,
    });
  };

  showFavModal = () => {
    this.setState({
      favModal: true,
    });
  };

  handleClick = (store_id) => {
    let accounts_id = this.props.user.id;

    let data = { accounts_id, store_id };
    if (accounts_id === undefined) {
      this.showModal();
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
      .then((data) => {
        this.props.addFavorite(data);
      });
  };

  render() {
    const modal = (
      <div className="favModal-container">
        <form className="modal" onSubmit={this.hideModal}>
          <p>Please create an account to add a favorite</p>
          <button className="favModal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );

    const favModal = (
      <div className="favModal-container">
        <form className="favModal" onSubmit={this.hideFavModal}>
          <p>Store already a favorite</p>
          <button className="favModal-button" type="submit">
            Okay
          </button>
        </form>
      </div>
    );

    return (
      <>
        {this.state.modal ? modal : ""}
        {this.state.favModal ? favModal : ""}

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
                    {!this.props.favorites.find(
                      ({ store_id }) => store.id === store_id
                    ) ? (
                      <button
                        onClick={() => this.handleClick(store.id)}
                        className="fav-button"
                      >
                        Fav
                      </button>
                    ) : (
                      "Already favorited"
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default StoresList;
