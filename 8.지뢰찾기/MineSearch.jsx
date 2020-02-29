import React, {useReducer, createContext, useMemo} from 'react';
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
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';

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
      };
    case OPEN_CELL : {
      const tableData = [...state.tableData]; //이전배열 복사, 배열 주소는 달라짐(얕은 복사)
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.OPENED;
      let around = [];

      return {
        ...state,
        tableData,
      }
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return{
        ...state,
        tableData,
        halted:true,
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
    default: return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {tableData, halted, timer, result} = state; {/*useReducer보다 뒤로 가야함 실행순서*/}
  const value = useMemo( () => ({
     tableData: tableData,
     halted: halted,
     dispatch
   }), [tableData, halted]); //dispatch 는 항상 같기때문에 안넣어줘도 됨
  return (
    <TableContext.Provider value={value}> {/*}이렇게 constext로 묶어주면 아래 컴포넌트들에서 context 데이터에 접근 가능*/}
      <Form/>
      <div>{timer}</div>
      <Table/>
      <div>{result}</div>
    </TableContext.Provider>
  )
}

export default MineSearch;
