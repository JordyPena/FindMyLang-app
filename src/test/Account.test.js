import React from 'react';
import ReactDOM from 'react-dom'
import Account from '../components/Account'

 const user = ["test"]

 describe('Account component', () => {
  
   it('Account renders without crashing', () => {
     const div = document.createElement('div')
   
     ReactDOM.render(<Account user={user}/>, div);
   
     ReactDOM.unmountComponentAtNode(div)
   })
})