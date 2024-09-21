import axios from 'axios'
import {removeUserFromLocalStorage} from '../utils/localStorage.js';

const BASE_URL= process.env.REACT_APP_BASE_URL;

   const dashboardAxios = axios.create({
           baseURL:BASE_URL,
           headers: {
            'Content-Type': 'application/json',
          }
    });

    dashboardAxios.interceptors.request.use((config)=>{
        const authToken = JSON.parse(localStorage.getItem('token'))
        config.headers.common.Authorization = `Bearer ${authToken}`
        return config
    },(error)=>{
        return Promise.reject(error)
    });

    dashboardAxios.interceptors.response.use((response)=>{
        return response
    },(error)=>{
        if(error.response?.status === 401){
            removeUserFromLocalStorage()
            window.location = '/login?message=Session Expired, Login Again'
        }
        else if(error.response?.status ===400){
            removeUserFromLocalStorage()
            window.location = '/login?message=Invalid Token, Login Again'
        } 
        return Promise.reject(error)
    });

export default dashboardAxios;