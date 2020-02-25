import React, {memo} from 'react'; //useEffect, useState => 얘네 쓰는걸 Hooks라고 함

//얘는 그냥 함수 컴포넌트
//하이오더 컴포넌트 => 컴포넌트를 감싸는 컴포넌트
const Ball = memo(({number}) => {
  console.log(number);
    let background;
    if(number <= 10) {
      background = 'red';
    } else if(number <=20){
      background = 'blue';
    } else if(number <=30){
      background = 'green';
    } else if(number <=40){
      background = 'yellow';
    } else{
      background = 'orange';
    }
    return (
      <div className="ball" style= {{background}}>{number}</div>
    );
});

{/*
  class Ball extends PureComponent {
  render(){
    let background;
    if(number <= 10) {
      background = 'red';
    } else if(number <=20){
      background = 'blue';
    } else if(number <=30){
      background = 'green';
    } else if(number <=40){
      background = 'yellow';
    } else{
      background = 'orange';
    }
    return (
      <div className="ball" style= {{background}}>{number}</div>
    );
  }
}
*/}

export default Ball;
