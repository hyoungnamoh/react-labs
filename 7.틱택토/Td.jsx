import React, {useCallback} from 'react';
import {CLICK_CELL} from './Tictactoe';
const Td = ({rowIndex, cellIndex}) => {
  const onClickTd =useCallback( () =>{
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: roeIndex, cell: cellIndex});{/*타입 이름은 아무거나 상관없음, 리듀서에서나 잘 만들어주자*/}
  }, []);

  return (
    <td onClick={onClickTd}>{''}</td>
  )
}

export default Td;
