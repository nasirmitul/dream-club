import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt="" />
            <p className='site-name'>The Dream Club</p>
        </nav>
    );
};

export default Header;