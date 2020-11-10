import React from "react";
import "../styling/About.css";

function About() {
  return (
    <>
      <main>
        <header className="about-header">
          <h1>Why FindMyLang</h1>
        </header>
        <section className="about-content">
          <p>
            At T-mobile we want to make sure you get the best customer
            experience as possible. Because of that we want you to be able to
            find a store that speaks the language you speak in the Dallas area.
          </p>
          <p>
            With our app you can simply select the language of your choice And
            you'll get a list of stores in the Dallas area that match the
            language you selected.
          </p>
          <p>
            Enjoy!
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
