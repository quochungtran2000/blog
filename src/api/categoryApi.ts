import { API_BASE_URL } from "../application.constant";
import axiosClient from "./axiosClient";
import { BaseResponse, ICategory, IJob, IPagingResponse } from "../utils/interface";

const categoryApi = {
  categories: (params = {}): Promise<IPagingResponse<ICategory>> => {
    const url = `${API_BASE_URL}/categories`;
    return axiosClient.get(url, { params });
  },
  category: (id: number): Promise<IJob> => {
    const url = `${API_BASE_URL}/categories/${id}`;
    return axiosClient.get(url);
  },
  create: (data: any): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/categories`;
    return axiosClient.post(url, data);
  },
  update: (id: number, data: any): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/categories/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: number): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
