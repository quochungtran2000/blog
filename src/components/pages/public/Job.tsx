import careerApi from "../../../api/careerApi";
import { Layout } from "../../layout";
import { useEffect, useState } from "react";
import { IJob } from "../../../utils/interface";
import { toast } from "react-toastify";
import useQueryParams from "../../../hook/useQueryParam";
import {  useParams } from "react-router";
import JobLayout from "../../layout/Layout/JobLayout";

export default function Job() {
  const [post, setPost] = useState<IJob>();
  const [popularPost, setPopularPost] = useState<IJob[]>([]);

  const { id }:any = useParams()

  const queryParams = useQueryParams();
  const page = queryParams.page || 1;
  const page_size = queryParams.page_size || 1;

  const getPost = async () => {
    try {
      const data = await careerApi.job(id);
      setPost(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getPopularPost = async () => {
    try {
      const { data } = await careerApi.jobs({ page: 1, page_size: 10 });
      setPopularPost(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  useEffect(() => {
    getPopularPost();
  }, []);
  console.log(post);
  return (
    <Layout>
      {post && <JobLayout post={post} popularPost={popularPost}></JobLayout>}
    </Layout>
  );
}
