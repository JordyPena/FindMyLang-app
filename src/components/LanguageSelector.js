import React, { Component } from "react";
import "../styling/SearchBar.css";


class LanguageSelector extends Component {
  

  render() {
    const options = this.props.languages.map((language, i) => (
      <option value={language} key={i}>
        {language}
      </option>
    ));
    return (
      <form className="search-bars">
      
        <label htmlFor="language"><h3 className="select-header">Select a language</h3></label>
        <select
          id="language"
          name="language"
          
          onChange={(e) => this.props.setLanguage(e.target.value)}
        >
          <option value="All">All</option>
          {options}
        </select>

      
      
       
      </form>
    );
  }
}

export default LanguageSelector;
