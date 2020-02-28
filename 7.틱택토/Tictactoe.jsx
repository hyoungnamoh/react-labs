import React, { useEffect, useReducer, useCallback, memo} from 'react';
import Table from './Table';


const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['','',''],
    ['','',''],
    ['','','']
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER'; //얘네 그냥 모듈로 만들어버림
export const CLICK_CELL = 'CLICK_CELL';//이 액션을 td에서도 쓰기때문에
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER: //state를 어떻게 바꿀지
    //state.winner = action.winner; 이렇게 하면 안됨
    return {
      //기존 state를 직접 바꾸면 안되고
      //새로운 객체를 만들어서 바뀐 값만 바꿔줘야함
      ...state, //객체를 새롭게 복사, 이렇게하면 기존스테이트 얕은복사
      winner: action.winner, //바뀔 부분
    };

    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN:{
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      }
    }
    case RESET_GAME:{
      return{
        ...state,
        turn: 'O',
        tableData: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        recentCell: [-1, -1],
      }
    }
  }
};

const Tictactoe = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);
  const {tableData, winner, turn, recentCell} = state;
  const onClickTable = useCallback(() => { //action 부분, 자식 컴포넌트에서 쓸 친구이므로 useCallBack으로 감싸줌
    dispatch({ type: 'SET_WINNER', winner: 'O'}); //얘네가 action.type, action.winner가 됨
  }, []);

  useEffect(() => {
    const [row, cell] = recentCell;
    console.log('useEffect');
    if(row < 0){
      return;
    }
    let win = false;
    if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] ===turn){ //가로줄 검사
      win = true;
    }
    if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] ===turn){//세로줄 검사
      win = true;
    }
    if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] ===turn){ //대각선 검사
      win = true;
    }
    if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] ===turn){ //대각선 검사
      win = true;
    }
    if(win){ //승리시
      console.log('승리');
      dispatch({ type: SET_WINNER, winner: turn});
      dispatch({ type: RESET_GAME});
    } else{ //승리가 아닌경우
      let all = true; //무승부 플래그
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if(!cell){
            all = false;
          }
        });
      });
      if(all){ //무승부일 경우
        dispatch({ type: RESET_GAME});
      }else{ //무승부가 아닐경우
        dispatch({ type: CHANGE_TURN});
      }
      //console.log(state.turn);여기서 turn을 찍어봐도 윗줄에서 바뀌고 난 뒤 turn이 나오는게 아니라 바뀌기 전 turn 이나옴, dispatch가 비동기방식으로 동작하기 때문
      // 이런 비동기에 따른 처리를 해주려면 useEffect 사용
    }
  }, [recentCell]);

  return (
    <>
      <Table onClick={onClickTable} tableData = {tableData} dispatch = {dispatch}/>
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
});

export default Tictactoe;
