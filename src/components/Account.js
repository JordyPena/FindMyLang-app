import React from "react";
import "../styling/Account.css";

function Account() {
  return (
    <>
      <section className="username">
        <p>Username</p>
        <p>LogOut</p>
      </section>

      <section className="favorites">
        <p>Favorites</p>
        <div className="list">
          <ul>
            <li>Favorites</li>
            <p>This will display store name 
              and address
            </p>
            <button>Delete</button>

            <li>Favorites</li>
            <p>This will display store name 
              and address
            </p>
            <button>Delete</button>

            <li>Favorites</li>
             <p>This will display store name 
              and address
            </p>
            <button>Delete</button>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Account;
