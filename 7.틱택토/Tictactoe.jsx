import React, {useState, useReducer, useCallback} from 'react';
import Table from './Table';


const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['','',''],['','',''],['','','']],
}

export const SET_WINNER = 'SET_WINNER'; //얘네 그냥 모듈로 만들어버림
export const CLICK_CELL = 'CLICK_CELL';//이 액션을 td에서도 쓰기때문에

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WINNER': //state를 어떻게 바꿀지
    //state.winner = action.winner; 이렇게 하면 안됨
    return {
      //기존 state를 직접 바꾸면 안되고
      //새로운 객체를 만들어서 바뀐 값만 바꿔줘야함
      ...state, //객체를 새롭게 복사, 이렇게하면 기존스테이트 얕은복사
      winner: action.winner, //바뀔 부분
    };

    case CLICK_CELL:
    return {
      ...state,
    };
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);
  const onClickTable = useCallback(() => { //action 부분, 자식 컴포넌트에서 쓸 친구이므로 useCallBack으로 감싸줌
    dispatch({ type: 'SET_WINNER', winner: 'O'}); //얘네가 action.type, action.winner가 됨
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData = {state.tableData}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  )
};

export default Tictactoe;
