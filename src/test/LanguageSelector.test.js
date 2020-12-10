import React from 'react';
import ReactDOM from 'react-dom'
import LanguageSelector from '../components/LanguageSelector'

const languages = ["Portuguese"]
const setLanguage = () => {}

describe('Language component', () => {
  
  it('LanguageSelector renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<LanguageSelector languages={languages} setLanguage={setLanguage}/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})