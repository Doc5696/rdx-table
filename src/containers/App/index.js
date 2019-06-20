import React from 'react';
import Header from '../Header';
import Table from '../Table';
import MainWrapper from './styles/MainWrapper';

class App extends React.Component {

  render() {
    const dataLables = this.props.usersData.lables;
    const dataResults = this.props.usersData.results;
    const getUsersData = this.props.getUsersData;
    return(
      <MainWrapper>
        <Header lables={dataLables} />
        <Table getUsersData={getUsersData} lables={dataLables} results={dataResults} />
      </MainWrapper>
    );
  }
}

export default App;