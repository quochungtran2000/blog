import axios, { AxiosInstance } from "axios";
import queryString from "querystring";
import * as dotenv from "dotenv";
import { API_BASE_URL } from "../application.constant";
dotenv.config();

const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  // console.log('ENV: ' + JSON.stringify(process.env));
  // console.log('Base URL: ' + config.baseURL);

  const token = localStorage.getItem("token");

  if (token) {
    (config as any).headers.Authorization = token;
  }

  return config;
});

axiosClient.interceptors.response.use((res) => {
  return res.data;
});

export default axiosClient;
