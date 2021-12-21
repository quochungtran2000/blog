import { API_BASE_URL } from '../application.constant';
import { IComment, IPagingResponse } from '../utils/interface';
import axiosClient from './axiosClient';

const commentApi = {
  get: (postId: number): Promise<IPagingResponse<IComment>> => {
    const url = `${API_BASE_URL}/post/${postId}/comment`;
    return axiosClient.get(url);
  },
  create: (postId: number, comment: string) => {
    const url = `${API_BASE_URL}/post/${postId}/comment`;
    return axiosClient.post(url, { comment });
  },
};

export default commentApi;
