import React, { Fragment } from 'react';
import Seo from '../components/seo';

import { Link } from 'gatsby';

function About() {
    return (
        <Fragment>
            
        <Seo
            title="About This Site"
            description="More information about this site."
        />
        <main>
          <h1>About This Site</h1>
          <Link to="/">Back to home</Link>
        </main>
        </Fragment>
    )
}

export default About;