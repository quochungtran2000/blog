import {
  Avatar,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { authApi } from "../../api";
import { useTheme } from "../../context/Theme";
import { useUser } from "../../context/User";
import { UserRole } from "../../utils/enum";

type Props = {
  onClose: () => void;
  onOpenLogin: () => void;
};

const RegisterForm = ({ onClose, onOpenLogin }: Props) => {
  const { getUser } = useUser();
  const { setOpenBackdrop, setCloseBackdrop } = useTheme();

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "100%",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e", margin: "1rem auto" };
  const btnstyle = { margin: "16px 0" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onChangeRole = (e: any) => {
    setRole(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeFullname = (e: any) => {
    setFullname(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const errors: string[] = [];
      if (!username) errors.push(`username is required`);
      if (!password) errors.push(`password is required`);
      if (!email) errors.push(`email is required`);
      if (!phone) errors.push(`phone is required`);
      if (!fullname) errors.push(`fullname is required`);
      if (!role) errors.push(`user type is required`);

      if (errors.length) return errors.map((str) => toast.error(str));

      setOpenBackdrop();

      const { token } = await authApi.register({
        username,
        password,
        email,
        role,
        phone,
        fullname,
      });

      localStorage.setItem("token", token);
      getUser();
      setCloseBackdrop();
      toast.success("sign up success");
      onClose();
    } catch (error: any) {
      setCloseBackdrop();
      toast.error(error?.response?.data?.message);
      // onClose();
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={btnstyle} sx={{ textAlign: "center" }}>
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <TextField
          style={btnstyle}
          label="Email"
          placeholder="Enter username"
          fullWidth
          required
          onChange={onChangeEmail}
        />

        <TextField
          style={btnstyle}
          label="Phone"
          placeholder="Enter username"
          fullWidth
          required
          onChange={onChangePhone}
        />

        <TextField
          style={btnstyle}
          label="Full name"
          placeholder="Enter username"
          fullWidth
          required
          onChange={onChangeFullname}
        />

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

        <TextField
          id="select"
          label="User Type"
          value={role}
          style={btnstyle}
          onChange={onChangeRole}
          select
          fullWidth
        >
          <MenuItem value={UserRole.USER}>User</MenuItem>
          <MenuItem value={UserRole.HR}>Hr</MenuItem>
        </TextField>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={onSubmit}
        >
          Sign Up
        </Button>

        <Typography style={btnstyle}>
          Already have an account ?
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={onOpenLogin}
          >
            Sign In
          </span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
