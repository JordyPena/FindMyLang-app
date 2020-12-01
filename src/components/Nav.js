import React from "react";
import { Link } from "react-router-dom";
import "../styling/Nav.css";

function Nav(props) {
  console.log(props.user)
  return (
    <>
      <nav className="Nav">
        <Link to="/">
          <h3>Home</h3>
        </Link>

        <Link to="/about">
          <h3>About</h3>
        </Link>
        
        {!!Object.keys(props.user).length && (
          <Link to="/account">
            <h3>Account</h3>
          </Link>
        )}
      </nav>
    </>
  );
}

export default Nav;
