import React from 'react';
import TableCell from './styles/TableCell';

function TableItem(props) {

  const item = props.item;

  return(
    <TableCell>
      {item}
    </TableCell>
  );
}

export default TableItem;