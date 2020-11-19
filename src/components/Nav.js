import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Nav.css'

function Nav() {
  return (
    <>
      
        <nav className="Nav">
        
            <Link to='/'>
              <h3>Home</h3>
            </Link>

            <Link to='/about'>
              <h3>About</h3>
            </Link>

            <Link to='/account'>
              <h3>Account</h3>
            </Link>

           
          
        </nav>
       
    </>
  )
}

export default Nav
