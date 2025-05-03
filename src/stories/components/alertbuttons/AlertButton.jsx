
import React from 'react';
import './alertbutton.css';

export const AlertButton = () => {
    return <div><button class="btn success">Success</button>
    <button class="btn info">Info</button>
    <button class="btn warning">Warning</button>
    <button class="btn danger">Danger</button>
    <button class="btn default">Default</button>
    </div>;
};