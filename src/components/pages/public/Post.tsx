import postApi from "../../../api/postApi";
import { PostLayout, Layout } from "../../layout";
import { useEffect, useState } from "react";
import { IComment, IPost } from "../../../utils/interface";
import { toast } from "react-toastify";
import useQueryParams from "../../../hook/useQueryParam";
import {  useParams } from "react-router";
import commentApi from "../../../api/commentApi";

export default function Post() {
  const [post, setPost] = useState<IPost>();
  const [popularPost, setPopularPost] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  const { id }:any = useParams()

  const queryParams = useQueryParams();
  const page = queryParams.page || 1;
  const page_size = queryParams.page_size || 1;

  const getPost = async () => {
    try {
      const data = await postApi.post(id);
      setPost(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getPopularPost = async () => {
    try {
      const { data } = await postApi.posts({ page: page, page_size: page_size });
      setPopularPost(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getComment = async () => {
    try {
      const { data } = await commentApi.get(id);
      setComments(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    getPost();
    getComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  useEffect(() => {
    getPopularPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(post);
  return (
    <Layout>
      {post && <PostLayout reloadComment={getComment} comments={comments} post={post} popularPost={popularPost}></PostLayout>}
    </Layout>
  );
}
