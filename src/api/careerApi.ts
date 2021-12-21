import { API_BASE_URL } from '../application.constant';
import axiosClient from './axiosClient';
import { BaseResponse, ICreateJob, IJob, IPagingResponse } from '../utils/interface';

const careerApi = {
  jobs: (params = {}): Promise<IPagingResponse<IJob>> => {
    const url = `${API_BASE_URL}/career`;
    return axiosClient.get(url, { params });
  },
  job: (id: number): Promise<IJob> => {
    const url = `${API_BASE_URL}/career/${id}`;
    return axiosClient.get(url);
  },
  create: (data: ICreateJob): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/career`;
    return axiosClient.post(url, data);
  },
  update: (id: number, data: any): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/career/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id: number): Promise<BaseResponse> => {
    const url = `${API_BASE_URL}/career/${id}`;
    return axiosClient.delete(url);
  },
  myJob: (params: any): Promise<IPagingResponse<IJob>> => {
    const url = `${API_BASE_URL}/me/my-job`;
    return axiosClient.get(url, { params });
  },
};

export default careerApi;
