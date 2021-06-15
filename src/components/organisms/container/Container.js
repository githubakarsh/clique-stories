
import React from 'react';
import './container.scss';

const Container = ({children}) => {
    return <div className="content-container">
        {children}
    </div>
}

export default Container;
