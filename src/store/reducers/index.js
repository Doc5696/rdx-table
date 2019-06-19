import {combineReducers} from 'redux';
import usersReducer from './users.reducer';

const reducers = combineReducers({
  usersData: usersReducer
});

export default reducers;