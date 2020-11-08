import React from "react";
import "../styling/LandingPage.css"

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
            Hi, this app allows you to search for businesses in your area with
            employees who speak a language you requested.
          </p>
          </div>
          
        </section>

        <section>
         <div>
         <h3>How to use</h3>
          <p>
            In the searchbar, input the stores name you desire,
            language you require and your zipcode.
            That will return any results that fit your criteria.
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
