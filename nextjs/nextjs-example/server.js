const { default: next } = require("next");
const express = require('express');

const app = next({ dev: true });
const handle = app.getRequestHandler(); //get 요청 처리기
app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(3000, () => {
    console.log('next-express running on port 3000');
  });
});
