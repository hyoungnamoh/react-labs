const React = require('react'); //노드에 모듈시스템에서 불러옴
const ReactDOM = require('react-dom');
//jsx로 만들면 아 이건 리액트구나, jsx 문법이 들어갔구나 확실히 인지시켜줌

const WordRelay = require('./WordRelay');
//파일이 엄청 많을 때 필요한 만큼만 가져와서 사용할 수 있음

ReactDOM.render(<WordRelay />, document.querySelector('#root')); //jsx 문법을 읽지 못함
