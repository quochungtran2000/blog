import { locationApi } from "../../../api";
import authApi from "../../../api/authApi";
import { useUser } from "../../../context/User";
import { Layout } from "../../layout";

export default function Home() {
  const { setToken, user } = useUser();
  return (
    <Layout>
      <h3 style={{ textAlign: "center" }}>Home Page</h3>

      <button
        onClick={async () => {
          const data = await authApi.login({
            username: "user",
            password: "user",
          });
          localStorage.setItem("token", data.token);
          setToken(data.token);

          console.log(data);
        }}
      >
        Login
      </button>

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

      <button
        onClick={async () => {
          const city = await locationApi.city()
          const district = await locationApi.district(1060)
          const ward = await locationApi.ward(1060, 384)
         

          console.log(city);
          console.log(district);
          console.log(ward);
        }}
      >
        Login
      </button>
    </Layout>
  );
}
