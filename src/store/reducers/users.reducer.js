import * as types from '../actions/types';

const initialState = {
  lables: [],
  results: []
};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
  case types.GET_USERS_DATA: {
    return {
      ...state,
      results: action.payload
    };
  }
  case types.GET_LABLES: {
    return {
      ...state,
      lables: action.payload
    };
  }
  default:
    return state;
  }
};

export default usersReducer;