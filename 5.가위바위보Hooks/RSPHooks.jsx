import React, { useState, useRef, useEffect } from 'react';

/*
  Hooks는 라이프사이클이 따로 없지만 흉내는 낼 수 있음..

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

const RSPHooks = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgcoord] = useState(rspCoods.바위);
  const [score, setScore] = useState(0);

  //useState 나 useRef처럼 함수컴포넌트 안에서 사용해야함
  //첫번째 인수에 실행시킬 함수
  //두번째 인수엔 배열이 들어가는데 이 배열에 있는 친구가 바뀌면 함수가 실행
  useEffect( () => { //componentDidMount, componentDidUpdate 역할을 해 줌
    //튜토리얼엔 이 둘을 합쳐놓은거라고 설명함. 1 대 1 대응은 아님
    interval.current = setInterval(changeHand, 100);
    return () => { //componentWillUnmount 역할
      clearInterval(interval.current);
    }
  }, [imgCoord]); //두번째 인수 배열 부분이 빠지면 뭐가 바뀌든 신경쓰지 않겠다, 처음 로드 됐을때만 한번 실행


  const interval = useRef();

  const changeHand = () => {
    console.log(imgCoord, rspCoods.바위);
    if(imgCoord === rspCoods.바위){
      setImgcoord(rspCoods.가위);
    } else if (imgCoord === rspCoods.가위) {
      setImgcoord(rspCoods.보);
    } else if(imgCoord === rspCoods.보){
      setImgcoord(rspCoods.바위);
    }
  }

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore
    if(diff === 0){
      setResult('비겼습니다.');
    } else if([-1, 2].includes(diff)){
      setResult('이겼습니다!');
      setScore((prevScore) => {
        return prevScore+1;
      });
    } else{
      setResult('나주 패배입니다.')
      setScore((prevScore) => {
        return prevScore-1;
      });
    }
    setTimeout( () => {
      interval.current = setInterval(changeHand, 100)
    }, 2000)
  }

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  )
}
export default RSPHooks;
