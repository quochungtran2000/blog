import { API_BASE_URL } from '../application.constant';
import axiosClient from './axiosClient';

const reportApi = {
  totalPostPerWeek: (): Promise<{data: any}> => {
    const url = `${API_BASE_URL}/report/post-per-weed`;
    return axiosClient.get(url);
  },
  totalUserCreateToday: (): Promise<{data: number, total: number}> => {
    const url = `${API_BASE_URL}/report/user-create-today`;
    return axiosClient.get(url);
  },
};

export default reportApi;
