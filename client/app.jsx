import React from 'react';

export const Layout = ({ content }) => (
    <div>
        <h1>MyApp</h1>
        <hr/>
        <div>{content}</div>
    </div>
);

export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);

