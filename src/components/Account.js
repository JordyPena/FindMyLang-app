import React from 'react';
import "../styling/Account.css";

function Account() {
  return (
    <>
      <section>
        <h3>Username</h3>
        <button>Logout</button>
      </section>

      

      <section className="favorites">
      <p>Favorites</p>
      <button>Add new fav</button>
        <ul className="list">
          <li>Favorites</li>
          <button>Delete</button>

          <li>Favorites</li>
          <button>Delete</button>

          <li>Favorites</li>
          <button>Delete</button>
        </ul>
        
      </section>
    </>
  )
}

export default Account

  