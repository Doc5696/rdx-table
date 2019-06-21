import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUsersData } from '../../store/services/users.service';

import { GetLables, GetUsersData } from '../../store/actions/users.actions';

import App from './index';

const mapStateToProps = state => {
  return {
    lables: state.lables,
    results: state.results
  };
};

const mapActionsToProps = dispatch => {
  return {
    getUsersData: results => dispatch(GetUsersData(results)),
    getLables: lables => dispatch(GetLables(lables))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(App)
);
