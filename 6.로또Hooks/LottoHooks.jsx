import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
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

const LottoHooks = () => {
  const lottolNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottolNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts=useRef([]);




  const runTimeouts = () => {
    for(let i=0; i< winNumbers.length -1; i++){
      timeouts.current[i] = setTimeout(() => { //let 사용하면 클로저 문제가 발생하지 않음 es6오면서 바뀐부분
        setWinBalls((prevWinBalls) => {
          return [...prevWinBalls, winNumbers[i]];
        });
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  const onClickRedo = useCallback(() => { //처음 리턴값을 계속 기억하고 있음
    console.log(winNumbers); //얘 값이 계속 똑같음 이것도 계속 바뀌게 하려면
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current=[];
  }, [winNumbers]);//두번째 인자 배열에 winNumbers를 넣어 얘가 바뀌면 얘도 새로 바뀌게 해야함

  //useState 나 useRef처럼 함수컴포넌트 안에서 사용해야함
  //첫번째 인수에 실행시킬 함수
  //두번째 인수엔 배열이 들어가는데 이 배열에 있는 친구가 바뀌면 함수가 실행
  useEffect( () => { //componentDidMount, componentDidUpdate 역할을 해 줌
    runTimeouts();
    return () => { //componentWillUnmount 역할
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); //두번째 인수 배열 부분이 빠지면 뭐가 바뀌든 신경쓰지 않겠다, 처음 로드 됐을때만 한번 실행
  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">{/*보통 반복문을 기점으로 컴포넌트 분리*/}
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />} {/* && 조건문, 삼항연산자같은..? */}
      {redo && <button onClick={redo ? onClickRedo : () => {}}>한번 더!</button>}
    </>
  );
}

export default LottoHooks;
