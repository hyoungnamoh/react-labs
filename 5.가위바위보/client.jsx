//const React=require('react');
import React from 'react';

// const ReactDOM=require('react-dom');
import ReactDom from 'react-dom';

// const {hot} = require('react-hot-loader/root');
import {hot} from 'react-hot-loader/root';

// const ResponseCheck=require('./ResponseCheck');
import RSP from './RSP';

const Hot=hot(RSP);
ReactDom.render(<Hot/>, document.querySelector('#root'));
