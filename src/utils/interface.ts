export interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  create_date: Date;
  update_date: Date;
}

export interface IPagingResponse<T> {
  total: number;
  data: T;
}

export interface IBaseLocation {
  id: number;
  name: string;
}

export interface ICity extends IBaseLocation {}

export interface IDistrict extends IBaseLocation {
  city_id: number;
}

export interface IWard extends IBaseLocation {
  district_id: number;
}
