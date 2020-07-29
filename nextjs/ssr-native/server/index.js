import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import Html from './Html';

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  let preloadState = {
    text: 'Sever-Side-Rendering',
  };

  let renderProps = {
    //preloadState를 window객체를 통해 전달
    preloadState: `window.__PRELOADED_STATE__=${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`, 
    script: '/build/client.bundle.js'
  }

  ReactDOMServer.renderToNodeStream(
    <Html {...renderProps}>
      <App data={preloadState}/>
    </Html>
  ).pipe(res);
res.send('<h1>Hello~!! React Server-Side Rendering</h1>');
});

app.listen(port, () => {
console.log('http://localhost:3000')
});