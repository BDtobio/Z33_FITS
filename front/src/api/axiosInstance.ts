import axios, { AxiosInstance } from 'axios';


const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';


console.log("API URL usada en axios:", API_URL);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
