import React from 'react';
import ReactDOM from 'react-dom'
import StoresList from '../components/StoresList'

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

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<StoresList stores={stores}/>, div);

  ReactDOM.unmountComponentAtNode(div)
})