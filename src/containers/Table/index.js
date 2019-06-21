import React from 'react';
import TableRow from '../../components/TableRow';
import TableTitleRow from '../../components/TableTitleRow';
import MainTable from './styles/MainTable';
import TableContainer from './styles/TableContainer';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 25
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getUsersData();
  }

  handleClick(e) {
    this.setState({
      ...this.state,
      currentPage: Number(e.target.id)
    });
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;

    const lables = this.props.lables; // Object

    const recievedLables = lables.map(lable => {
      // Array of lables
      return lable.dataKey;
    });

    const results = this.props.results; // Array of objects

    // Logic of pagination

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(results.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderButtons = pageNumbers.map(number => {
      let isActive = '';
      if (number === currentPage) {
        isActive = 'active';
      } else {
        isActive = 'normal';
      }
      return (
        <button
          className={isActive}
          key={number}
          id={number}
          onClick={this.handleClick}>
          {number}
        </button>
      );
    });

    return (
      <TableContainer>
        <MainTable>
          <thead>
            <TableTitleRow lables={lables} />
          </thead>
          <tbody>
            {currentItems.map(dataItem => (
              <TableRow
                recievedLables={recievedLables}
                dataItem={dataItem}
                key={dataItem.id}
              />
            ))}
          </tbody>
        </MainTable>
        <div className="buttons">{renderButtons}</div>
      </TableContainer>
    );
  }
}

export default Table;
