import { API_BASE_URL } from "../application.constant";
import axiosClient from "./axiosClient";

const userApi = {
  getUsers: () => {
    const url = `${API_BASE_URL}/user`;
    return axiosClient.get(url)
  },
  getUser: (id: number) => {
    const url = `${API_BASE_URL}/user/${id}`;
    return axiosClient.get(url)
  },
  updateUser: (id: number,data: any) => {
    const url = `${API_BASE_URL}/user/${id}`;
    return axiosClient.put(url)
  },
  changePassword: (id: number,data: any) => {
    const url = `${API_BASE_URL}/user/${id}/change-password`;
    return axiosClient.put(url)
  }
}

export default userApi;
