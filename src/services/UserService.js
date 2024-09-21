import axios from 'axios';
import http from './HttpService';

const END_POINT = 'user-router';

const login = (data)=> {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/${END_POINT}/login-user`, data);
}

const registration = (data)=> {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/${END_POINT}/register`, data);
}

const logout = (data)=> {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/logout`, data);
}


const changeAdminOwnPassword = (id, data)=>{
  return axios.patch(`${process.env.REACT_APP_BASE_URL}/change-password`, data);
}
export default {
  login,
  registration,
  changeAdminOwnPassword,
  logout
};
