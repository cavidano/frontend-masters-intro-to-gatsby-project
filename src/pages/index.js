import React from 'react';
import { Link } from 'gatsby';

function Home() {
    return (
        <main>

            <h1>Hello World</h1>

            <Link to="/about">
                About this Site
            </Link>

        </main>
    )
}

export default Home;