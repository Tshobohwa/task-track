import React from 'react'
import './Header.css'
import menu from '../../assets/menu.png';
import exit from '../../assets/exit.png';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavMenu } from '../../redux/navbar/navbarSlice';


const Header = () => {
const {linksListDisplayed} = useSelector((store => store.navbar));
const dispatch = useDispatch ();
const handleToggleNavMenu = () => {
    dispatch(toggleNavMenu());
}
  return (
    <nav className='app--nav__bar'>
      <h2 className='app--logo'>TSap</h2>
      <ul className={`nav--list ${linksListDisplayed ? '' : 'nav--list__hidden'}`}>
        <li className='nav--list__item'>
            <Link to='/' className='nav--link' onClick={handleToggleNavMenu}>
                Home
            </Link>
        </li>
        <li className='nav--list__item'>
            <Link to='/about' className='nav--link' onClick={handleToggleNavMenu}>
                About
            </Link>
        </li>
        <li className='nav--list__item'>
            <Link to='/login' className='nav--link' onClick={handleToggleNavMenu}>
                Login
            </Link>
        </li>
        <li className='nav--list__item'>
            <Link to='/sign_up' className='nav--link' onClick={handleToggleNavMenu}>
                Sign up
            </Link>
        </li>
        <li className='nav--list__item'>
            <Link to='/sign_up' className='nav--link' onClick={handleToggleNavMenu}>
                Log out
            </Link>
        </li>
        <li className='nav--list__item'>
            <Link to='/settings' className='nav--link' onClick={handleToggleNavMenu}>
                settings
            </Link>
        </li>
      </ul>
      <button type='button' className='nav--button' onClick={handleToggleNavMenu} >
        <img className='nav--icon' src={linksListDisplayed? exit :  menu} /> 
      </button>
    </nav>
  )
}

export default Header
