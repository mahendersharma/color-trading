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

const addAdminUser = (data)=>{
  return http.post(END_POINT, data);
}

const updateAdminUser = (id,data)=>{
  return http.put(`${END_POINT}/${id}`, data);
}

const getAdminUser = (searchParams)=> {
  return http.get(END_POINT , {params:searchParams});
}

const getNavigationMenu = (searchParams={})=> {
  return http.get(`${END_POINT}/getNavigationMenu`, {params:searchParams});
}

const deleteAdminUser = (id)=>{
  return http.delete(`${END_POINT}/${id}`);
}

const changeAdminUserStatus = (id, data)=>{
 return http.patch(`${END_POINT}/change-status/${id}`, data);
}

const changeAdminUserPassword = (id, data)=>{
  console.log("hello",data)
  return http.patch(`${END_POINT}/change-password/${id}`, data);
}

const changeAdminOwnPassword = (id, data)=>{
  return axios.patch(`${process.env.REACT_APP_BASE_URL}/change-password`, data);
}
export default {
  login,
  registration,
  addAdminUser,
  getAdminUser,
  deleteAdminUser,
  changeAdminUserStatus,
  updateAdminUser,
  getNavigationMenu,
  changeAdminOwnPassword,
  changeAdminUserPassword,
  logout
};
