import React from 'react';
import ReactDOM from 'react-dom'
import Signup from '../components/Signup'

describe('Signup component', () => {
  
  it('Signup renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Signup/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})