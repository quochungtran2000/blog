import { Grid } from "@mui/material";
import { IJob } from "../../../utils/interface";
import { RelativePostCard } from "../../card/RelativePostCard";
import { Job } from "../../Job";

type Props = {
  post: IJob;
  popularPost: IJob[];
};

export default function JobLayout({ post, popularPost }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={9} lg={9} xl={9}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <Job data={post} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={3} lg={3} xl={3} sx={{ padding: "1rem" }}>
        <h3 style={{ textAlign: "left", margin: "1rem 0" }}>
          Bài tuyển dụng liên quan
        </h3>
        {popularPost.map((item: IJob, index: number) => (
          <Grid item xs={12} key={index}>
            <RelativePostCard data={item} count={index} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
