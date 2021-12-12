import React, { Fragment } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from '../components/seo';

const Home = () => {
    const data = useStaticQuery(graphql`
    query MyData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    
    const meta = data?.site?.siteMetadata ?? {};

    return (
      <Fragment>
        <Seo />
        <header>
          <Link to="/">{meta.title}</Link>
        </header>
        <main>
          <h1>Hello Frontend Masters!</h1>
          <Link to="/about">About this site</Link>
        </main>
      </Fragment>
    )
}

export default Home;