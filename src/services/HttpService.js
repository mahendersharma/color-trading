import axios from 'axios';
import { removeUserFromLocalStorage } from '../utils/localStorage.js';

const BASE_URL = process.env.REACT_APP_BASE_URL

const dashboardAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store', // Prevent client-side caching
  }
});

// Request Interceptor
dashboardAxios.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken');
  console.log("authToken", authToken);

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
}, (error) => Promise.reject(error));

// Response Interceptor
dashboardAxios.interceptors.response.use((response) => response, (error) => {
  if (error.response?.status === 401) {
    removeUserFromLocalStorage();
    window.location = '/login?message=Session Expired, Login Again';
  } else if (error.response?.status === 400) {
    removeUserFromLocalStorage();
    window.location = '/login?message=Invalid Token, Login Again';
  }

  return Promise.reject(error);
});

export default dashboardAxios;
