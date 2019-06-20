import axios from 'axios';
import {GetUsersData, GetLables} from '../actions/users.actions';

export const getUsersData = () => async dispatch => {
  const response = await axios.get('/someData.json');
  dispatch(GetLables(response.data.lables));
  dispatch(GetUsersData(response.data.results));
};