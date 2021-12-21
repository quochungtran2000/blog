import { useState } from "react";
import { toast } from "react-toastify";
import { authApi } from "../../api";
import { useTheme } from "../../context/Theme";
import { useUser } from "../../context/User";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

type Props = {
  onClose: () => void;
  onOpenRegister: () => void;
};

const LoginForm = ({ onClose, onOpenRegister }: Props) => {
  const { getUser } = useUser();
  const { setOpenBackdrop, setCloseBackdrop } = useTheme();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "100%",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e", margin: "1rem auto" };
  const btnstyle = { margin: "16px 0" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    try {
      if (!username) return toast.error(`username is required`);
      if (!password) return toast.error(`password is required`);
      setOpenBackdrop();

      const { token } = await authApi.login({ username, password });
      localStorage.setItem("token", token);
      getUser();
      setCloseBackdrop();
      toast.success("login success");
      onClose();
    } catch (error: any) {
      console.log({error})
      setCloseBackdrop();
      toast.error(error?.response?.data?.message);
      onClose();
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={btnstyle} sx={{ textAlign: "center" }}>
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={btnstyle}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={onChangeUsername}
        />
        <TextField
          style={btnstyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={onChangePassword}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={onSubmit}
        >
          Sign in
        </Button>
        <Typography style={btnstyle}>
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Forgot password ?
          </span>
        </Typography>
        <Typography style={btnstyle}>
          Do you have an account ?
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={onOpenRegister}
          >
            Sign Up
          </span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
