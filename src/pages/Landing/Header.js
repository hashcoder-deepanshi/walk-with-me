import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './Images/logo.png'


const Header = () => {
  return (
    <nav className='land-nav'>
        <div className='logo'><img src={logo} alt="logo"/></div>
        <ul className="navbar">
            <li><a href="#">About Us</a>
            </li>
            <li className='login'> <Link to="/login"><img src="https://cdn-icons-png.flaticon.com/512/310/310818.png" alt="Login" /></Link></li>
        </ul>
    </nav>

  )
}

export default Header
