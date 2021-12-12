import postApi from "../../../api/postApi";
import { PostsLayout } from "../../layout";
import { useEffect, useState } from "react";
import { IPost } from "../../../utils/interface";
import useQueryParams from "../../../hook/useQueryParam";
import { toast } from "react-toastify";

export default function Home() {
  const [post, setPost] = useState<IPost[]>([]);
  const [popularPost, setPopularPost] = useState<IPost[]>([]);

  const queryParams = useQueryParams();
  const page = queryParams.page || 1;
  const page_size = queryParams.page_size || 12;

  const getPost = async () => {
    try {
      const { data } = await postApi.posts({ page, page_size });
      setPost(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getPopularPost = async () => {
    try {
      const { data } = await postApi.posts({ page: 1, page_size: 5 });
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
    <PostsLayout
      posts={post}
      popularPost={popularPost}
      title={"Danh sách các bài đăng"}
    ></PostsLayout>
  );
}
