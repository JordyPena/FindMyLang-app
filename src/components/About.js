import React from 'react'
import "../styling/About.css"

function About() {
  return (
    <>
      <main>
        <header className="about-header">
          <h1>Why FindMyLang</h1>
        </header>
        <section className="about-content">
          <p>
            FindMyLang was created for users in need of better help 
            while visiting retail locations.
          </p>
          <p>
          With our app you can simply
            type a store name, the language of their choice
            and a zipcode, And get a list of stores
            in your area that fit the criteria.
          </p>
          <p>
          You will see nearby locations that
            have representatives that speak the language you selected
            along with their names and availability.
          </p>
          
          <p>
            Enjoy!
          </p>
        </section>
      </main>
    </>
  )
}

export default About

  