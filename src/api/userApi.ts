import { API_BASE_URL } from '../application.constant';
import { ICustomer, IPagingResponse, IUpdateUser } from '../utils/interface';
import axiosClient from './axiosClient';

const userApi = {
  getUsers: (params: any): Promise<IPagingResponse<ICustomer>> => {
    const url = `${API_BASE_URL}/user`;
    return axiosClient.get(url, { params });
  },
  getUser: (id: number) => {
    const url = `${API_BASE_URL}/user/${id}`;
    return axiosClient.get(url);
  },
  updateUser: (data: IUpdateUser) => {
    const url = `${API_BASE_URL}/user`;
    return axiosClient.put(url, data);
  },
  changePassword: (data: any) => {
    const url = `${API_BASE_URL}/user/change-password`;
    return axiosClient.post(url, data);
  },
  delete: (id: number) => {
    const url = `${API_BASE_URL}/user/${id}`;
    return axiosClient.delete(url);
  },
};

export default userApi;
