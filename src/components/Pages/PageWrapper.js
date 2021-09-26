import React from 'react';

import './PageWrapper.css';

function PageWrapper(props) {
    return (
        <h1 className="page-wrapper" style={props.style}>
            {props.children}
        </h1>
    )
}

export default PageWrapper
