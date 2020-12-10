import React from "react";
import { Link } from "react-router-dom";
import "../styling/Nav.css";

function Nav(props) {
  return (
    <>
      <nav className="Nav">
        <div className="bg-container">
          <div className="background-img container"></div>

          <div className="link-style container">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
