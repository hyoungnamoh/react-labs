//파이을 쪼개면 쓸 라이브러리를 또 가져와줘야함
const React=require('react');
const {Component} = React;

class WordRelay extends Component{
  state = {
    text:'Hello, webpack',
  };

  render(){
    return <h1>{this.state.text}</h1>
  }
}
//쪼갠 파일에서 쓰는 컴포넌트를 밖에서도 쓸 수 있게 해줌
module.exports=WordRelay;
