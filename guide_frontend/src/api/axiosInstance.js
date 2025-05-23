import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8585',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + localStorage.getItem('token')
  }
});

export default axiosInstance;
