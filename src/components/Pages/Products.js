import React from 'react';

import PageWrapper from './PageWrapper';

const Products = () => {
    const imgUrl = "url('./images/img-1.jpg')";

    return (

        <PageWrapper className="products" style={{
            backgroundImage: imgUrl,
        }}>
            Products
        </PageWrapper>
    )
}

export default Products;
