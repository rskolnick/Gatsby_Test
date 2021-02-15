import React from 'react';
// import { Link } from 'gatsby'; used for internal Gatsby pages

import Footer from '../components/Footer';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello!</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, totam.</h2>
      {/* When linking to an outside site like your github profile or twitter, use a tag */}
      {/* <p>Need a developer? <a href="/contact">Contact me.</a></p> */}
      {/* When linking internally to Gatsby pages, use Link tag */}
      {/* <p>Need a developer? <Link to='/contact'>Contact me.</Link></p> */}
      <Footer />
    </div>
  );
}

export default IndexPage;