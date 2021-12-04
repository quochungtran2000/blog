import { axiosClient } from ".";
import { ICity, IDistrict, IPagingResponse, IWard } from "../utils/interface";

const locationApi = {
  city: (): Promise<IPagingResponse<ICity>> => {
    const url = "/location/city";
    return axiosClient.get(url);
  },
  district: (cityId: number): Promise<IPagingResponse<IDistrict>> => {
    const url = `/location/${cityId}/district`;
    return axiosClient.get(url);
  },
  ward: (
    cityId: number,
    districtId: number
  ): Promise<IPagingResponse<IWard>> => {
    const url = `/location/${cityId}/${districtId}/ward`;
    return axiosClient.get(url);
  },
};

export default locationApi;
