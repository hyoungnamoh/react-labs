//const React=require('react');
import React from 'react';

// const ReactDOM=require('react-dom');
import ReactDom from 'react-dom';

// const {hot} = require('react-hot-loader/root');
import {hot} from 'react-hot-loader/root';

// const ResponseCheck=require('./ResponseCheck');
import MineSearch from './MineSearch';

const Hot=hot(MineSearch);
ReactDom.render(<Hot/>, document.querySelector('#root'));
