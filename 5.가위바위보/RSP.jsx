import React, { Component } from 'react';

/*
  클래스의 경우 -> constructor -> render -> ref -> componentDidMount ->
  (setState/props 바뀔 때) shoudComponent (true면 다음) -> render ->
  componentDidUpdate -> 부모가 나를 없앨때 -> componentWillUnmount -> 소멸
*/

const rspCoods = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
  //보: '-284', 랑 뭐가 다른거지
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoods).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  }

  interval;

  changeHand = () => {
    //console.log(this.state.imgCoord, rspCoods.바위);
    const {imgCoord} = this.state;
    if(imgCoord === rspCoods.바위){
      this.setState({
        imgCoord: rspCoods.가위,
      });
    } else if (imgCoord === rspCoods.가위) {
      this.setState({
        imgCoord: rspCoods.보,
      });
    } else if(imgCoord === rspCoods.보){
      this.setState({
        imgCoord: rspCoods.바위,
      });
    }
  }

  componentDidMount(){ //컴포넌트가 첫 렌더링 된 후 실행
    //비동기 안에서 바깥의 변수를 참조하면 클로저 오류 발생
    //const {imgCoord} = this.state;
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount(){ //리렌더링 된 후
    clearInterval(this.interval);
  }

  componentDidUpdate(){ //컴포넌트가 제거되기 직전

  }

  onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore
    if(diff === 0){
      this.setState({
        result: '비겼습니다.',
      });
    } else if([-1, 2].includes(diff)){
      this.setState( (prevState) => {
        return {
          result: '이겼습니다.',
          score: prevState.score + 1,
        };
      });
    } else{
      this.setState( (prevState) => {
        return{
          result: '나주 패배입니다.',
          score: prevState.score - 1,
        }
      });
    }
    setTimeout( () => {
      this.interval = setInterval(this.changeHand, 100)
    }, 2000)

  }

  render(){
    const { result, score, imgCoord} = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}
export default RSP;
