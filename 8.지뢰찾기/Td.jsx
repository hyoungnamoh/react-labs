import React, {useContext, useCallback, memo, useMemo} from 'react';
import {
  CODE, TableContext, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL, INCREMENT_TIMER
} from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444'
      };
    case CODE.OPENED:
      return {
        background : 'white'
      }
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return{
        background: 'red'
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return{
        background: 'yellow'
      };
    default:
      return {
        background: 'white'
      };
  }
};

const getTdText = (code) => {
  console.log('tdtext');
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';
    default:
      return code === 0 ? '' : code;
  }

};

const Td = memo(({rowIndex, cellIndex}) => {
  console.log('td');
  const {tableData, dispatch, halted} = useContext(TableContext);
  const onClickTd = useCallback(() => {
    if(halted){
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
          dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex});
          return;
      case CODE.MINE:
          dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex});
          return;
      case CODE.CODE_OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      default:return;

    }

  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    if(halted){
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({type: FLAG_CELL, row: rowIndex, cell: cellIndex});
      return;
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        dispatch({type:QUESTION_CELL, row: rowIndex, cell: cellIndex});
      return;
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        dispatch({type:NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
      return;
      default: return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);
  return <TdComp onClickTd ={onClickTd} onRightClickTd = {onRightClickTd} data={tableData[rowIndex][cellIndex]}/>
});

 //컴포넌트를 분리해서 함수는 호출 되지만 실제 컴포넌트는 한번만 호출되게 할 수 있음(하나로 해서 return부에 memo를 써도 됨)
const TdComp = memo(({onClickTd, onRightClickTd, data}) => {
  return (
    <td
      style = {getTdStyle(data)}
      onClick = {onClickTd}
      onContextMenu = {onRightClickTd}
    >
      {getTdText(data)}
    </td>
  )
});

export default Td;
