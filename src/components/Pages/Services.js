import React from 'react';

import PageWrapper from './PageWrapper';

const Services = () => {

    const imgUrl = "url('./images/img-2.jpg')";

    return (
        <PageWrapper className="services" style={{ backgroundImage: imgUrl, }}>
            Services
        </PageWrapper>
    )
}

export default Services