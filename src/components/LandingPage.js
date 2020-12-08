import React from "react";
import "../styling/LandingPage.css";


function LandingPage() {
  return (
    <>
      
      <div className="landingPage-content">
        <header className="landing-header">
          <h1>LandingPage</h1>
        </header>

        <section>
          <div className="welcome">
            <h3 className="titles">Welcome</h3>
            <p className="landingPage-p">
              Hi, this app allows you to search for a T-mobile store in the
              city of Dallas</p> <p className="landingPage-p">with employees who speak the language you select.
            </p>
          </div>
        </section>

        <section>
          <div className="welcome">
            <h3 className="titles">How to use</h3>
            <p className="landingPage-p">
              Click on home and 
              in the dropdown, select the language you require.</p>
              <p className="landingPage-p"> You will see results that fit your
              criteria.
            </p>
            <p className="landingPage-p">
              Create an account to save frequented stores to your favorites.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
