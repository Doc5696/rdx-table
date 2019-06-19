import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getUsersData} from '../../store/services/users.service';
import App from './index';

const mapStateToProps = state => {
  return {
    usersData: state.usersData
  };
};

const mapActionsToProps = dispatch => {
  return {
    getUsersData: usersData => dispatch(getUsersData(usersData))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(App)
);