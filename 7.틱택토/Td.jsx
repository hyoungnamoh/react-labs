import React, {useCallback, useRef, useEffect, memo} from 'react';
import {CLICK_CELL} from './Tictactoe';
const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) => {
  console.log('td render'); //9번 찍힘

  const ref = useRef([]); //최적화를 위한 렌더링되게 하는 요소 찾기
  useEffect(() => {
    console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd =useCallback( () =>{
    if(cellData){
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex});{/*타입 이름은 아무거나 상관없음, 리듀서에서나 잘 만들어주자*/}
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});

export default Td;
