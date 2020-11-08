import React from "react";
import "../styling/Results.css";

function Results() {
  return (
    <>
      <section className="results">
        <div className="list">
          <h3>Results</h3>
          <p>Will render when a user submits a request</p>
          <ul>
            <li>Example 1</li>
            <button>Add to fav</button>
            <li>Example 2</li>
            <button>Add to fav</button>
            <li>Example 3</li>
            <button>Add to fav</button>
          </ul>
        </div>

        <img
          src="https://i.stack.imgur.com/yEshb.gif"
          alt="map"
          className="map"
        />
      </section>
    </>
  );
}

export default Results;
