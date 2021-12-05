import { UserRole } from "./enum";

export interface BaseResponse {
  status: number;
  message: string;
}

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
  data: T[];
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

export interface IRegisterInput {
  username: string;
  password: string;
  email: string;
  phone: string;
  fullname: string;
  role: UserRole;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
  fullname: string;
  role: string;
  create_date: Date;
  update_date: Date;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  author: IUser;
  create_date: string;
  update_date: string;
}

export interface ICreatePost {
  title: string;
  content: string;
  image_url: string;
  categories: number[];
}
