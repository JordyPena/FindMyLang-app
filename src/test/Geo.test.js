import React from 'react';
import ReactDOM from 'react-dom'
import Geo from '../components/Geo'

describe('Geo component', () => {
  
  it('Geo renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<Geo/>, div);
  
    ReactDOM.unmountComponentAtNode(div)
  })
})