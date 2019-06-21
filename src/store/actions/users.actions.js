import * as types from './types';

export const GetLables = lables => {
  return {
    type: types.GET_LABLES,
    payload: lables
  };
};

export const GetUsersData = results => {
  return {
    type: types.GET_USERS_DATA,
    payload: results
  };
};
