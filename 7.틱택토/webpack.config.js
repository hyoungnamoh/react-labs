const path = require('path');
//process.env.NODE_ENV='production'; //배포용일 때 설정
module.exports = {
    name: 'Tictactoe-setting',
    mode: 'development', //실 서비스: production
    devtool: 'eval', //hidden-souace-map
    resolve: { //엔트리에서 뒤에 확장자 안붙여줘도 알아서 찾아가게끔
      extensions: ['.js', '.jsx']
    },

  //엔트리에 있는 파일을 읽고
  entry: {
    app: ['./client'],
  },

  //모듈을 적용 시키고
  module: {
    rules: [{
      test: /\.jsx$/, //js 파일과 jsx파일에 이 룰을 적용 정규표현식
      loader: 'babel-loader',
      options:{ //바벨에 대한 옵션
        presets:['@babel/preset-env', '@babel/preset-react'], //plugin 들의 모음이 preset
        plugins:['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'],
      }
    }]
  },

  //출력
  output:{
    path:path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'/dist/',
  }
};
