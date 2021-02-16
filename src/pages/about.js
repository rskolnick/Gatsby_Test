import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const About = () => {
    return(
        <Layout>
            <div>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ratione eum temporibus maxime asperiores necessitatibus ad 
                    laborum eveniet voluptas ut totam?
                </p>
                <Link to='/contact'>Contact Me</Link>
            </div>
        </Layout>
    )
}

export default About;