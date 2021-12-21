import { API_BASE_URL } from '../application.constant';
import axiosClient from './axiosClient';
import { BaseResponse, ICreatePost, IPagingResponse, IPost } from '../utils/interface';

const postApi = {
  posts: (params = {}): Promise<IPagingResponse<IPost>> => {
    const url = `${API_BASE_URL}/post`;
    return axiosClient.get(url, { params });
  },
  post: (id: number): Promise<IPost> => {
    const url = `${API_BASE_URL}/post/${id}`;
    return axiosClient.get(url);
  },
  create: (data: ICreatePost): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/post`;
    return axiosClient.post(url, data);
  },
  update: (id: number, data: ICreatePost): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/post/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: number): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/post/${id}`;
    return axiosClient.delete(url);
  },
  myPost: (params: any): Promise<IPagingResponse<IPost>> => {
    const url = `${API_BASE_URL}/me/my-post`;
    return axiosClient.get(url, { params });
  },
};

export default postApi;
