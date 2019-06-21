import React from 'react';
import TableTitle from './styles/TableTitle';
import TableItem from '../TableItem';

function TableTitleRow(props) {
  const lables = props.lables;

  return (
    <TableTitle>
      {lables.map(lable => (
        <TableItem item={lable.lable} key={lable.id} />
      ))}
    </TableTitle>
  );
}

export default TableTitleRow;
