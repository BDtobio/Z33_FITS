import axios, { AxiosInstance } from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://z33-fits.onrender.com';

console.log("API URL usada en axios:", API_URL);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
