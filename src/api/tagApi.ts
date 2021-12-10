import { API_BASE_URL } from '../application.constant';
import axiosClient from './axiosClient';
import { BaseResponse, IPagingResponse, ITag } from '../utils/interface';

const tagApi = {
  tags: (params = {}): Promise<IPagingResponse<ITag>> => {
    const url = `${API_BASE_URL}/tags`;
    return axiosClient.get(url, { params });
  },
  tag: (id: number): Promise<ITag> => {
    const url = `${API_BASE_URL}/tags/${id}`;
    return axiosClient.get(url);
  },
  create: (data: any): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/tags`;
    return axiosClient.post(url, data);
  },
  update: (id: number, data: any): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/tags/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: number): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/tags/${id}`;
    return axiosClient.delete(url);
  },
};

export default tagApi;
