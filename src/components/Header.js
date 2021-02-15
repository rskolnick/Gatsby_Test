import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return(
        <header className='nav-container'>
            <ul>
                <li>
                    <Link to='/'>My Site</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;