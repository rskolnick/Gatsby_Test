import React from 'react';

const today = new Date();

const Footer = () => {
    return(
        <footer>
            <p>Created by Ryan Skolnick, © {today.getFullYear()}</p>
        </footer>
    );
}

export default Footer;