import * as types from './types';

export const GetUsersData = results => {
  return {
    type: types.GET_USERS_DATA,
    payload: results
  };
};

export const GetLables = lables => {
  return {
    type: types.GET_LABLES,
    payload: lables
  };
};