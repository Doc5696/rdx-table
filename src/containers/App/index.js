import React from 'react';
import Header from '../Header';
import Table from '../Table';
import MainWrapper from './styles/MainWrapper';

class App extends React.Component {
  render() {
    const dataLables = this.props.lables;
    const dataResults = this.props.results;
    const getUsersData = this.props.getUsersData;
    const getLables = this.props.getLables;
    return (
      <MainWrapper>
        <Header lables={dataLables} />
        <Table
          getLables={getLables}
          getUsersData={getUsersData}
          lables={dataLables}
          results={dataResults}
        />
      </MainWrapper>
    );
  }
}

export default App;
