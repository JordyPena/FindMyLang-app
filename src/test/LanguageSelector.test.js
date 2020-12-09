import React from 'react';
import ReactDOM from 'react-dom'
import LanguageSelector from '../components/LanguageSelector'

const languages = ["Tai-Kadai", "Spanish", "Bengali", "German", "Telugu", "Hindi", "Gujarati", "Japanese", "Persian", "Chinese", "Yiddish", "Russian", "Urdu", "Tagalog", "Polish", "French", "Italian", "Korean", "Portuguese", "Haitian Creole"]
const setLanguage = () => {}
it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<LanguageSelector languages={languages} setLanguage={setLanguage}/>, div);

  ReactDOM.unmountComponentAtNode(div)
})