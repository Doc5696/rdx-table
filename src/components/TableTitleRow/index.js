import React from 'react';
import TableTitle from './styles/TableTitle';
import TableItem from '../TableItem';

class TableTitleRow extends React.Component {
  render(){
    const lables = this.props.lables;
    return(
      <TableTitle>
        {lables.map(lable =>
          <TableItem item={lable.lable} key={lable.id} />)}
      </TableTitle>
    );
  }
}

export default TableTitleRow;