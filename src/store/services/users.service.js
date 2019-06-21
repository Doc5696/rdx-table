import axios from 'axios';

export const getUsersData = results => {
  return axios.get('/someData.json').then(responce => responce.results);
};
// getUsersData
// getLables

export const getLables = lables => {
  return axios.get('/someData.json').then(responce => responce.lables);
};
