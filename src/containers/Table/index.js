import React from 'react';
import TableRow from '../../components/TableRow';
import TableTitleRow from '../../components/TableTitleRow';
import MainTable from './styles/MainTable';
import TableContainer from './styles/TableContainer';

class Table extends React.Component {

  render() {

    const lables = this.props.lables; // Object

    const recievedLables = lables.map(lable => {  // Array
      return lable.dataKey;
    });



    const results = this.props.results; // Object







    


    return(
      <TableContainer>
        <MainTable>
          <thead>
            <TableTitleRow lables={lables} />
          </thead>
          <tbody>
            {results.map(dataItem =>
              <TableRow recievedLables={recievedLables} dataItem={dataItem} key={dataItem.id} />)}
          </tbody>
        </MainTable>
      </TableContainer>
    );
  }
}

export default Table;