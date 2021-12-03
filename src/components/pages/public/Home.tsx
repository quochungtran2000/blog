import { Button, Grid } from "@mui/material";
import { locationApi } from "../../../api";
import postApi from "../../../api/postApi";
import { useUser } from "../../../context/User";
import { Layout } from "../../layout";
import ModalBase from "../../modal/ModalBase";

export default function Home() {
  const { user } = useUser();
  return (
    <Layout>
      <Grid container>
        <Grid item sm={12} md={8} lg={8} xl={8}>
          1
        </Grid>
        <Grid item sm={12} md={4} lg={4} xl={4}>
          2
        </Grid>
      </Grid>
      <h3 style={{ textAlign: "center" }}>Home Page</h3>

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
