import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const today = new Date();

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return(
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © {today.getFullYear()}</p>
        </footer>
    );
}

export default Footer;