import { API_BASE_URL } from "../application.constant";
import { ILogin, IUser } from "../utils/interface";
import axiosClient from "./axiosClient";

const authApi = {
  me: (): Promise<IUser> => {
    const url = `${API_BASE_URL}/auth/me`;
    return axiosClient.get(url);
  },
  login: (data: ILogin): Promise<{ token: string }> => {
    const url = `${API_BASE_URL}/auth/login`;
    return axiosClient.post(url, data);
  },
};

export default authApi;
