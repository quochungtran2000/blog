import Layout from "./Layout";
import { Grid } from "@mui/material";
import { IPost } from "../../../utils/interface";
import { PostCard } from "../../card/PostCard";
import { PopularCard } from "../../card/PopularCard";

type Props = {
  title: string;
  // children: React.ReactNode;
  posts: IPost[];
  popularPost: IPost[];
};

export default function PostsLayout({ posts, popularPost, title }: Props) {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item sm={12} md={9} lg={9} xl={9}>
          <h3 style={{ textAlign: "left", margin: "1rem 0" }}>{title}</h3>
          <Grid container spacing={2}>
            {posts.map((item: IPost, index: number) => (
              <Grid key={index} item xs={12} md={6} xl={4}>
                <PostCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={12} md={3} lg={3} xl={3} sx={{ padding: "1rem" }}>
          <h3 style={{ textAlign: "left", margin: "1rem 0" }}>Bài viết Phổ Biến</h3>
          {popularPost.map((item: IPost, index: number) => (
            <Grid item xs={12} key={index}>
              <PopularCard data={item} count={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}
