import React, { Component } from 'react'
import "../styling/SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <form className="search-bars">
      <label className="visually-hidden">SearchBar</label>
      <input
        
        type="text"
        placeholder="Store Name"
        name="StoreName"
        value=""
        onChange=""
      />
      <input
        
        type="text"
        placeholder="Language"
        name="Language"
        value=""
        onChange=""
      />
      <input
        
        type="text"
        placeholder="Zipcode"
        name="Zipcode"
        value=""
        onChange=""
      />
      <button 
        className="search-button" 
        type="submit"
      >
        Search
      </button>
    </form>

    )
  }
}

export default SearchBar