//노드에서 경로 조작을 도와주는
const path = require('path');

module.exports = {
  name: 'WordRelay-setting',
  mode: 'development', //실서비스 : production
  devtool: 'eval',
  resolve: { //엔트리에서 뒤에 확장자 안붙여줘도 알아서 찾아감
    extensions : ['.js', '.jsx']
  },

//엔트리에 있는 파일을 읽고 모듈을 적용한 뒤 아웃풋함
  entry: { //입력
    app: ['./client.jsx'], //얘네 둘을 합쳐서 밑에 애 하나로 만들어줌
  },

  module:{
    rules:[{
      test:/\.jsx?/, //js파일과 jsx 파일에 이 룰을 적용, 정규표현식
      loader: 'babel-loader',
      options:{ //바벨에 옵션들
        presets:['@babel/preset-env', '@babel/preset-react'],
        plugins:['@babel/plugin-proposal-class-properties'],
      }
    }]
  },

  output: { //출력
    path: path.join(__dirname, 'dist'), //경로를 알아서 합쳐줌 __dirname(현재폴더까지의 ) + dist
    filename: 'app.js'
  }
};
