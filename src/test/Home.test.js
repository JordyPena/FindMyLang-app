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

describe('Home component', () => {
  
  it('Home renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Home languages={languages} setLanguage={setLanguage}
      handleSuccessfulAuth={handleSuccessfulAuth}
      user={user}
      stores={stores}
      language={language}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})