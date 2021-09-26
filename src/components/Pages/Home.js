import React, { Fragment } from 'react';

import Cards from '../Card/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home
