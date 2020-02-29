import React, {useState, useCallback, useContext} from 'react';
import {TableContext, START_GAME} from './MineSearch';
const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(10);

  const {dispatch} = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  },[]);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  },[]);

  const onClickBtn = useCallback((e) => {
    // console.log(START_GAME);
    // console.log(row,cell,mine);
    dispatch({ type: START_GAME, row, cell, mine});
  }, [row, cell, mine]);
  return(
    <div>
      <input type='number' placeholder = '세로' value = {row} onChange = {onChangeRow}/>
      <input type='number' placeholder = '가로' value = {cell} onChange = {onChangeCell}/>
      <input type='number' placeholder = '지뢰' value = {mine} onChange = {onChangeMine}/>
      <button onClick = {onClickBtn}>시작</button>
    </div>
  );
};

export default Form;
