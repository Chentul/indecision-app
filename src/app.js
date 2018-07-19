import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement(
    'p',
    {className: 'custom'},
    'Lorem Ipsum'
);
ReactDOM.render(template, document.getElementById('app'));