import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../components/Home'

const languages = ["Portuguese"]
const language = "Portuguese"
const setLanguage = () => {}
const isLoggedIn = "true"
const  handleSuccessfulAuth = () => {}
const user = {id: 1,
username: 'test',
password: 1234}
const stores = [{city: "Dallas",
id: 1,
languages: "Tai-Kadai, Spanish",
latitude: "32.77034187637225",
longitude: "-96.68451748452395",
name: "T-Mobile",
state: "TX",
street: "S Buckner Blvd",
street_num: "2947",
suite: "400",
zip: "75227"}]
const favorites = [{
  id: 68,
  accounts_id: 1,
  store_id: 19
}, {
  id: 96,
  accounts_id: 1,
  store_id: 1
}]
const getUserFavorites = () => {}
const addFavorite = () => {}
const handleLogin = () => {}

describe('Home component', () => {
  
  it('Home renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Home
      stores={stores}
      setLanguage={setLanguage}
      languages={languages}
      isLoggedIn={isLoggedIn}
      handleLogin={handleLogin}
      user={user}
      language={language}
      favorites={favorites}
      getUserFavorites={getUserFavorites}
      addFavorite={addFavorite}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})