import axios from 'axios';
import {GetUsersData, GetLables} from '../actions/users.actions';

export const getUsersData = usersData => async dispatch => {
  const response = await axios.get('/someData.json', usersData);
  dispatch(GetLables(response.data.lables));
  dispatch(GetUsersData(response.data.results));
};