import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
    return(
        <div>
            <Header />
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ratione eum temporibus maxime asperiores necessitatibus ad 
                laborum eveniet voluptas ut totam?
            </p>
            <Link to='/contact'>Contact Me</Link>
            <Footer />
            
        </div>
    )
}

export default About;