import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../../api';
import { Layout } from '../../layout';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChangeNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const onClick = async() => {
    if (newPassword !== confirmPassword) toast.error('mật khẩu mới không giống nhau');
    const data = {
      old_password: password,
      new_password: newPassword,
    };

    await userApi.changePassword(data).catch((error:any) => {
      return  toast.error(error.message);
    });
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    toast.success("Đổi mật khẩu thành công")
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Paper sx={{ padding: '1rem' }}>
            <h3 style={{ margin: '1rem 0' }}>Đổi mật khẩu</h3>

            <div style={{ margin: '1rem 0' }}>
              <TextField
                id="outlined-password-input"
                label="Mật khẩu hiện tại"
                type="password"
                fullWidth
                onChange={handleChangePassword}
              />
            </div>

            <div style={{ margin: '1rem 0' }}>
              <TextField
                id="outlined-password-input"
                label="Mật khẩu mới"
                type="password"
                fullWidth
                onChange={handleChangeNewPassword}
              />
            </div>
            <div style={{ margin: '1rem 0' }}>
              <TextField
                id="outlined-password-input"
                label="Nhập lại mật khẩu"
                type="password"
                fullWidth
                onChange={handleChangeConfirmPassword}
              />
            </div>

            <div style={{ margin: 'auto', textAlign: 'center' }}>
              <Button sx={{ margin: 'auto' }} variant="outlined" onClick={onClick}>
                Đổi mật khẩu
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
