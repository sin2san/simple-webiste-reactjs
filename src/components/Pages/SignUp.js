import React from 'react';

import PageWrapper from './PageWrapper';

const SignUp = () => {

    const imgUrl = "url('./images/img-4.jpg')";

    return (
        <PageWrapper className="sign-up" style={{
            backgroundImage: imgUrl,
        }}>
            SignUp
        </PageWrapper>
    )
}

export default SignUp
