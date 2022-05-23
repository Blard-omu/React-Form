import React from 'react'
import {Link, Outlet} from 'react-router-dom'
//import logo from './blard_logo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav>
        {/* <img src={logo} alt="logo" /> */}



            <ul>
                <li>
                   <Link className='nav-link' to='/'>
                       Home
                   </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/About'>
                       About
                   </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/Services'>
                       Services
                   </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/Instant'>
                       Buy/Sell
                   </Link>
                </li>
                
                
                
                
                
            </ul>
        </nav>

        <Outlet/>




    </div>
  )
}

export default Navbar