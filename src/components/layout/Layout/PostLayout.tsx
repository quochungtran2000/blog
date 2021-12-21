import { Grid } from "@mui/material";
import { IComment, IPost } from "../../../utils/interface";
import { PopularCard } from "../../card/PopularCard";
import { PostDetail } from "../../PostDetail";

type Props = {
  post: IPost;
  popularPost: IPost[];
  comments: IComment[];
  reloadComment: () => void
};

export default function PostLayout({ post, popularPost, comments = [], reloadComment }: Props) {
  return (
    // <Layout>
    <Grid container spacing={2}>
      <Grid item sm={12} md={9} lg={9} xl={9}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <PostDetail comments={comments} data={post} reloadComment={reloadComment} />
          </Grid>
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
    // </Layout>
  );
}
