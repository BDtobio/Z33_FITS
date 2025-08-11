import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Siempre apunta a localhost
});

export default axiosInstance;
