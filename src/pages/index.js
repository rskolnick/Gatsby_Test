import React from 'react';
// import { Link } from 'gatsby'; used for internal Gatsby pages
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => {
  return(
    <Layout>
      <Helmet title='My Site' defer={false} />
      <h1>Hello</h1>
      <h2>I'm Ryan Skolnick</h2>
      <p>Need a developer?</p>
    </Layout>
  );
}

export default IndexPage;