import React from 'react';
import TableCell from './styles/TableCell';

class TableItem extends React.Component {
  render(){
    const item = this.props.item;
    return(
      <TableCell>
        {item}
      </TableCell>
    );
  }
}

export default TableItem;