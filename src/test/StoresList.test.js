import React from 'react';
import ReactDOM from 'react-dom'
import StoresList from '../components/StoresList'

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
const language = "Portuguese"

describe('StoresList component', () => {
  
  it('StoresList renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<StoresList stores={stores}
    favorites={favorites}
    getUserFavorites={getUserFavorites}
    addFavorite={addFavorite}
    user={user}
    language={language}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})