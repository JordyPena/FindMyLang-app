import React from "react";
import "../styling/LandingPage.css"

function LandingPage() {
  return (
    <>
      <main>
        <header>
          <h1>LandingPage</h1>
        </header>

        <section>
          <h3>Welcome</h3>
          <p>
            Hi, this app allows you to search for business in your area with
            employees who speak a language you requested.
          </p>
        </section>

        <section>
          <h3>How to use</h3>
          <p>
            In the searchbar input the stores name you desire,
            language you require and your zipcode.
            That will return any results that fit your criteria.
          </p>
          <p>
            Create a account to save frequented stores to your favorites.
          </p>
        </section>

        <section>
          <h3>New user?</h3>
          <button>Sign up</button>

          <h3>Already have an account!</h3>
          <button>Log in</button>
        </section>
        
      </main>
    </>
  );
}

export default LandingPage;
