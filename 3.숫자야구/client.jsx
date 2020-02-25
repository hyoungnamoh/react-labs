const React=require('react');
const ReactDOM=require('react-dom');
const {hot} = require('react-hot-loader/root');

const NumberBaseballHooks=require('./NumberBaseballHooks');
const Hot=hot(NumberBaseballHooks);

ReactDOM.render(<Hot/>, document.querySelector('#root'));
