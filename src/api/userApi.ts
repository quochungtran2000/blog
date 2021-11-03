import { API_BASE_URL } from "../application.constant";
import axiosClient from "./axiosClient";

const userApi = {
  me: () => {
    const url = `${API_BASE_URL}/getUser`;
    return axiosClient.get(url)
  }
}

export default userApi;
