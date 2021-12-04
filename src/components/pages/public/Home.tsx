import { Grid } from "@mui/material";
import postApi from "../../../api/postApi";
import { useUser } from "../../../context/User";
import { Layout } from "../../layout";
import { useEffect, useState } from "react";
import { IPagingResponse, IPost } from "../../../utils/interface";
import { PostCard } from "../../card/PostCard";
import { PopularCard } from "../../card/PopularCard";

export default function Home() {
  const [post, setPost] = useState<IPagingResponse<IPost> | undefined>(
    undefined
  );
  const { user } = useUser();

  useEffect(() => {
    postApi.posts().then((res) => setPost(res));
  }, []);
  console.log(post);
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item sm={12} md={9} lg={9} xl={9}>
          <h3 style={{ textAlign: "left", margin: "1rem 0" }}>Home Page</h3>
          <Grid container spacing={2}>
            {post?.data?.map((item: IPost, index: number) => (
              <Grid key={index}  item xs={12} md={6} xl={4}>
                <PostCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={12} md={3} lg={3} xl={3} sx={{ padding: "1rem" }}>
          <h3 style={{ textAlign: "left", margin: "1rem 0" }}>Popular Post</h3>
          {post?.data?.map((item: IPost, index: number) => (
            <Grid item xs={12} key={index}>
              <PopularCard data={item} count={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {user && (
        <div>
          <div>{user.id}</div>
          <div>{user.email}</div>
          <div>{user.fullname}</div>
          <div>{user.phone}</div>
          <div>{user.email}</div>
          <div>{user.create_date}</div>
          <div>{user.update_date}</div>
        </div>
      )}
    </Layout>
  );
}
