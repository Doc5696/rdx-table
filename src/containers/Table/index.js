import React from 'react';
import TableRow from '../../components/TableRow';
import TableTitleRow from '../../components/TableTitleRow';
import MainTable from './styles/MainTable';

class Table extends React.Component {
  render() {
    const lables = this.props.lables;
    const results = this.props.results;
    return(
      <MainTable>
        <tbody>
          <TableTitleRow lables={lables} />
          {results.map(dataItem =>
            <TableRow dataItem={dataItem} key={dataItem.id} />)}
        </tbody>
      </MainTable>
    );
  }
}

export default Table;