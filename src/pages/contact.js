import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
    return(
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>Contact us at our email: <a href="https://google.com" target='_blank' rel='noreferrer'>test@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Contact;