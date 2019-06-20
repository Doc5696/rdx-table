import React from 'react';
import TableR from './styles/TableR';
import TableItem from '../../components/TableItem';

class TableRow extends React.Component {
  render(){

    const dataItem = this.props.dataItem; // Object
        
    const recievedLables = this.props.recievedLables; // Array

    let newResult = {};

    const resultsForRender = () => {

      for (var key in dataItem) {
        if (recievedLables.indexOf(key) !== -1) {
          newResult[key] = dataItem[key];
        }
      }
      return (
        newResult
      );
    };

    resultsForRender();

    const resultForRender = Object.values(newResult);

    let i = 1;    
    
    return(
      <TableR>
        {resultForRender.map(item =>
          <TableItem item={item} key={++i} />)}
      </TableR>
    );
  }
}

export default TableRow;