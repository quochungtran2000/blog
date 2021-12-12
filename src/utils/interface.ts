import { UserRole } from './enum';

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
  postCategory:IPostCategory[];
  postTag: IPostTag[];
  create_date: string;
  update_date: string;
}

export interface ICreatePost {
  title: string;
  content: string;
  image_url: string;
  categories: number[];
  tags: number[];
}

export interface ICreateJob {
  title: string;
  content: string;
  level: string;
  city_id: number;
  district_id: number;
  ward_id: number;
  street: string;
}

export interface IJob {
  id: number;
  title: string;
  content: string;
  level: string;
  author: IUser;
  location: JobLocation;
  create_date: Date;
  update_date: Date;
}

export interface JobLocation {
  city_code: number;
  city_name: string;
  district_code: number;
  district_name: string;
  ward_code: number;
  ward_name: string;
  street: string;
  full_address: string;
}

export interface ICategory {
  id: number;
  title: string;
  slug: string | null;
  parent_id: number;
  create_date: Date;
  update_date: Date;
}

export interface ITag {
  id: number;
  title: string;
  slug: string | null;
  create_date: Date;
  update_date: Date;
}

export interface IPostCategory {
  post_id: number;
  category_id: number;
  category: ICategory;
}

export interface IPostTag {
  post_id: number;
  tag_id: number;
  tag: ITag;
}
