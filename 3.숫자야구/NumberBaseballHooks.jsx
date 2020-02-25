//기본적으로 node로 webpack 을 돌리기 때문에 노드모듈문법만 지원
//다른데서 쓸 수 있는 이유 -> babel이 알아서 바꿔줌


//es2015 모듈 문법
//import React, {Component} from 'react';

//노드 모듈 문법
const React = require('react');
const TryHooks = require('./TryHooks');
const {useState, useRef} = React;
// import Try from './Try';
function getNumbers(){ //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate= [1,2,3,4,5,6,7,8,9];
  const array=[];
  for(let i=0; i<4; i++){
    const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(chosen);
  }
  return array;

}
const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value === answer.join('')){
      setResult('홈런');
      setTries((prevTries) => [...prevTries, {try: value, result: '홉런!'}]); //원래 있던 배열값 복사 + 새로운 배열 추가)
    } else{
      const anserArray= value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){
        setResult(`10번 넘게 틀려 실패! 답은 ${answer.join(',')} 였습니다!`); //join 배열과 배열 사이에 , 를 넣어 출력 배열을 합침)
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else{
        for(let i=0; i<4; i++){
          if(anserArray[i] === answer[i]){
            strike++;
          } else if(answer.includes(anserArray[i])){ //includes answer가 anserArray[i]를 포함하는지
            ball++;
          }
        }
        setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼 입니다`}]);
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput}/>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <TryHooks key= {`${i + 1}차 시도 : `} tryInfo={v} />
          )
        })}
      </ul>
    </>
  )
}

{/*export default NumberBaseball;*/}
module.exports = NumberBaseball;

{/*노드 모듈 문법 common js
//const React = require('react');
//exports.hello = 'hello';
//module.exports = NumberBaseball;

//결론은 노드에선 require 쓰고 react에선 import, export 사용
//둘은 거의 다 호환됨
//웹팩은 노드가 돌리기 때문에 require 사용
//클라이언트같은 애들은 웹팩에 있는 바벨이 바꿔주기 때문에 import 사용 가능*/}
