import React from 'react';
import Tr from './Tr';

const Table = ({onClick, tableData}) => {
  return (
    <table >
      {Array(tableData.length).fill().map((tr, i) => (<Tr rowIndex={i} rowData={tableData[i]}/>))} {/*i가 몇번째 줄인지 나타냄*/}
    </table>
  )
}
export default Table;
