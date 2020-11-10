import React, { Component } from "react";
import "../styling/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form className="search-bars">
        <label className="visually-hidden">SearchBar</label>

        <select>
          <option value="english" onChange="">English</option>
          <option value="english" onChange="">Spanish</option>
          <option value="english" onChange="">German</option>
          <option value="english" onChange="">Hindi</option>
          <option value="english" onChange="">Japanese</option>
          <option value="english" onChange="">Chinese</option>
          <option value="english" onChange="">Russian</option>
          <option value="english" onChange="">Tagalog</option>
          <option value="english" onChange="">French</option>
          <option value="english" onChange="">Korean</option>
          <option value="english" onChange="">Haitian Creole</option>
          <option value="english" onChange="">Portuguese</option>
          <option value="english" onChange="">Italian</option>
          <option value="english" onChange="">Polish</option>
          <option value="english" onChange="">Urdu</option>
          <option value="english" onChange="">Yiddish</option>
          <option value="english" onChange="">Persian</option>
          <option value="english" onChange="">Gujarati</option>
          <option value="english" onChange="">Telugu</option>
          <option value="english" onChange="">Bengali</option>
          <option value="english" onChange="">Tai-Kadai</option>
        </select>

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
