import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candiedate = Array(45).fill().map( (v,i) => i + 1);
  const shuffle = [];
  while(candiedate.length > 0){
    shuffle.push(candiedate.splice(Math.floor(Math.random() * candiedate.length), 1)[0]);
  }
  const bounsNumber = shuffle[shuffle.length -1 ];
  const winNumbers = shuffle.slice(0, 6).sort( (p, c) => p - c);
  return [...winNumbers, bounsNumber];
}


class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), //미리 숫자 뽑아놓음
    winBalls: [],
    bonus: null,
    redo: false,
  };

  timeouts=[];

  runTimeouts = () => {
    const { winNumbers } = this.state;
    for(let i=0; i< winNumbers.length -1; i++){
      this.timeouts[i] = setTimeout(() => { //let 사용하면 클로저 문제가 발생하지 않음 es6오면서 바뀐부분
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          }
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.runTimeouts();
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    if(this.state.winBalls.length === 0) { //온클릭 눌렀을 때 바뀌는 요소를 비교하면 됨
      this.runTimeouts();
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), //미리 숫자 뽑아놓음
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts=[];
  }

  render(){
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">{/*보통 반복문을 기점으로 컴포넌트 분리*/}
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />} {/* && 조건문, 삼항연산자같은..? */}
        {redo && <button onClick={redo ? this.onClickRedo : () => {}}>한번 더!</button>}
      </>
    )
  }
}

export default Lotto;
