import React, { Component } from "react";
import "../styling/SearchBar.css";
import StoresList from "./StoresList";
import {Route} from "react-router-dom"

class LanguageSelector extends Component {
  constructor(props) {
    super(props);

   
  }


  render() {
    const options = this.props.languages.map((language, i) => (
      <option value={language} key={i}>
        {language}
      </option>
    ));
    return (
      <form className="search-bars">
      

        <select
          id="language"
          name="language"
          
          onChange={(e) => this.props.setLanguage(e.target.value)}
        >
          <option value="None">Select a language</option>
          {options}
        </select>

      
      
       
      </form>
    );
  }
}

export default LanguageSelector;
