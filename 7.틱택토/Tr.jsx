import React from 'react';
import Td from './Td';
const Tr = ({rowData, rowIndex}) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (<Td cellIndex = {i} rowIndex = {rowIndex}>{''}</Td>))}
    </tr>
  )
}
export default Tr;
