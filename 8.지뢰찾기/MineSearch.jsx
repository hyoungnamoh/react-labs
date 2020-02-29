import React, {useReducer, createContext, useMemo, useEffect, memo} from 'react';
import Table from './Table';
import Form from './Form';

export const CODE ={
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, //0 이상이면 오픈
}

export const TableContext = createContext({ //모양만 대충 만들어줌..
  tableData: [ //
    [-1, -1, -1, -1],
    [-1, -7, -1, -1],
    [-1, -1, -7, -1],
    [-1, -1, -1, -1]
  ],
  halted: true,
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
  halted: true,
  openedCount: 0,
  data:{//승리 판단 시 필요, 배열보단 객체로 만드는게 이름붙일수 있어 더 유용함
    row: 0,
    cell: 0,
    mine: 0,
  },
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const plantMine = (row, cell, mine) => {
  const candidate = Array(row * cell).fill().map((arr, i) => { //0~99까지
    return i;
  });
  const shuffle = [];
  while (candidate.length > row * cell - mine){ //지뢰 갯수만큼 랜덤으로 뽑아두고
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);//셔플에 저장, 몇번째 칸에 지뢰가 있는지
  }
  const data = [];
  for(let i=0; i< row; i++){ //칸 생성
    const rowData=[];
    data.push(rowData);
    for(let j=0; j< cell; j++){
      rowData.push(CODE.NORMAL);
    }
  }
  for(let k=0; k< shuffle.length; k++){
    const ver = Math.floor(shuffle[k] / cell); //2차원 배열이기 때문에 0,0 인지 계산하기 위한 코드
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE; //몇번째 줄, 몇번째 칸인지 찾아서 지뢰를 심음
  }
  return data;
};
const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME :
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
        data:{//승리 판단 시 필요, 배열보단 객체로 만드는게 이름붙일수 있어 더 유용함
          row: action.row,
          cell: action.cell,
          mine: action.mine,
        },
        timer: 0,
        openedCount: 0,
      };
    case OPEN_CELL : {
      const tableData = [...state.tableData]; //이전배열 복사, 배열 주소는 달라짐(얕은 복사)
      //tableData[action.row] = [...state.tableData[action.row]]; //한 줄을 새로운 객체로 만들어줌
      //tableData[action.row][action.cell] = CODE.OPENED; //클릭하 셀에 OPENED 삽입
      tableData.forEach((row, i) => {// 모든 줄을 새로운 객체로
        tableData[i] = [...row];
      });
      const checked = []; //검사한 셀을 캐싱할 배열, 검사한 셀을 다시 검사하면 서로 계속 검사하기 때문에 mixmum callstack 에러 터짐
      let checkCount = 0; //현재까지 몇칸 열렸는지 검사, 승리조건

      const checkAround = (row, cell) => { //내 기준으로 주변 칸들을 검사하는 함수
        if([CODE.OPENED, CODE.FLAG_MINE, CODE.FLAG, CODE.QUESTION, CODE.QUESTION.MINE].includes(tableData[row][cell])){ //열려있거나, 깃발, 물음표 꽂힌앤지 검사
          return;
        }
        if(row < 0 || row >= tableData.length || cell < 0 || cell >= tableData[0].length){ //상하 좌우칸이 아닌경우
          return;
        }
        if(checked.includes(row + ',' + cell)){ //닫힌칸만 열기
          return;
        }
        else{ //한번 연칸은 무시하기
          checked.push(row + ',' + cell);
        }

        if(CODE.NORMAL === tableData[row][cell]){
          checkCount+=1; //하나 열릴때마다 ++
        }

        let around = [];
        if(tableData[row - 1]){ //윗줄이 있으면
          around = around.concat(
            tableData[row - 1][cell - 1],
            tableData[row - 1][cell],
            tableData[row - 1][cell + 1]
          );
        }
        if(tableData[row + 1]){ //아랫줄이 있으면
          around = around.concat(
            tableData[row + 1][cell - 1],
            tableData[row + 1][cell],
            tableData[row + 1][cell + 1]
          );
        }
        around = around.concat( //좌우칸이 경우엔 undefined가 되어 밑에 필터에서 걸러짐, 자바스크립트 특성
          // ++ [][]일 때 첫 번째 배열이 null이나 undefined면 에러가 나지만 두 번째 배열은 상관없습니다. 라고 댓글 달아주심
          tableData[row][cell - 1],
          tableData[row][cell + 1]
        );
        const count = around.filter((v) => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
        tableData[row][cell] = count;
        if(count === 0){ //빈칸이면 주변 검사
          const near = [];
          if(row -1 > -1){
            near.push([row - 1, cell - 1]);
            near.push([row - 1, cell]);
            near.push([row - 1, cell + 1]);
          }
          if(row + 1 < tableData.length){
            near.push([row + 1, cell - 1]);
            near.push([row + 1, cell]);
            near.push([row + 1, cell + 1]);
          }
          near.push([row, cell + 1]);
          near.push([row, cell - 1]);
          near.forEach((n) => {
            if(tableData[n[0]][n[1]] !== CODE.OPENED){
              checkAround(n[0], n[1]);
            }
          });
        }
        tableData[row][cell] = count;
      };
      checkAround(action.row, action.cell);
      let halted = false;
      let result = '';
      //console.log(state.data.row * state.data.cell - state.data.mine);
      console.log(state.openedCount + checkCount);
      console.log(state.data.row * state.data.cell- state.data.mine);
      if(state.data.row * state.data.cell - state.data.mine === state.openedCount + checkCount){//승리 판별
        halted = true;
        result = `${state.timer}초 만에 승리하셨습니다.`; //``으로 해줘야함
      }
      return {
        ...state,
        tableData,
        openedCount: state.openedCount + checkCount,
        result,
        halted,
      }
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      result = '패배하셨습니다';
      return{
        ...state,
        tableData,
        halted:true,
        result,
      }
    }
    case FLAG_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if(tableData[action.row][action.cell] === CODE.MINE){
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      }else{
        tableData[action.row][action.cell] = CODE.FLAG;
      }
      return{
        ...state,
        tableData,
      }
    }
    case QUESTION_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if(tableData[action.row][action.cell] === CODE.MINE){
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      }else{
        tableData[action.row][action.cell] = CODE.QUESTION;
      }
      return{
        ...state,
        tableData,
      }
    }
    case NORMALIZE_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if(tableData[action.row][action.cell] === CODE.MINE){
        tableData[action.row][action.cell] = CODE.MINE;
      }else{
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return{
        ...state,
        tableData,
      }
    }
    case INCREMENT_TIMER: {
      return {
        ...state,
        timer: state.timer + 1,
      }
    }
    default: return state;
  }
};

const MineSearch = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {tableData, halted, timer, result} = state; {/*useReducer보다 뒤로 가야함 실행순서*/}
  const value = useMemo( () => ({
     tableData: tableData,
     halted: halted,
     dispatch
   }), [tableData, halted]); //dispatch 는 항상 같기때문에 안넣어줘도 됨

   useEffect(() => {
     let timer;
     if(halted === false){
       timer = setInterval(() => {
         dispatch({ type: INCREMENT_TIMER});
       }, 1000);
       return () => {
         clearInterval(timer);
       }
     }
   }, [halted]);
  return (
    <TableContext.Provider value={value}> {/*}이렇게 constext로 묶어주면 아래 컴포넌트들에서 context 데이터에 접근 가능*/}
      <Form/>
      <div>{timer}</div>
      <Table/>
      <div>{result}</div>
    </TableContext.Provider>
  )
});

export default MineSearch;
