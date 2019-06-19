import React from 'react';
import TableR from './styles/TableR';
import TableItem from '../../components/TableItem';

class TableRow extends React.Component {
  render(){
    const dataItem = this.props.dataItem;
    const dataProps = Object.values(dataItem);
    return(
      <TableR>
        {dataProps.map(item =>
          <TableItem item={item} key={dataItem.id} />)}
      </TableR>
    );
  }
}

export default TableRow;