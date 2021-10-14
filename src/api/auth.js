import ApiCall from './ApiCall';

import {useSelector} from 'react-redux';

const login = (email, password) => ApiCall.post('/login', {email, password});
// const signUp = id => ApiCall.post(`/item/${id}.json`);
const userInfo = token =>
  ApiCall.get(
    '/selfDetails',
    {},
    {headers: {Authorization: `Bearer ${token}`}},
  );

export default {
  login,
  userInfo,
};
