import React from 'react';
import Header from '../Header';
import Table from '../Table';
import MainWrapper from './styles/MainWrapper';

class App extends React.Component {
  
  componentWillMount() {
    this.props.getUsersData();
  }

  render() {
    const dataLables = this.props.usersData.lables;
    const dataResults = this.props.usersData.results;
    return(
      <MainWrapper>
        <Header lables={dataLables} />
        <Table lables={dataLables} results={dataResults} />
      </MainWrapper>
    );
  }
}

export default App;