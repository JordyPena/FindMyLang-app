import React from "react";
import "../styling/LandingPage.css";
import LanguageSelector from "../components/LanguageSelector"

function LandingPage() {
  return (
    <>
      
      <div className="landingPage-content">
        <header>
          <h1>LandingPage</h1>
        </header>

        <section>
          <div className="welcome">
            <h3>Welcome</h3>
            <p>
              Hi, this app allows you to search for a T-mobile store in the
              Dallas area with employees who speak the language you select.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3>How to use</h3>
            <p>
              Click on home and 
              In the dropdown, select the language you require. Click on the
              search button, And you will see any results that fit your
              criteria.
            </p>
            <p>
              Create an account to save frequented stores to your favorites.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
