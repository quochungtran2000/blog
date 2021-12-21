//@ts-ignore
import { Avatar, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../layout';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { authApi, userApi } from '../../../api';
import { IUpdateUser, IUser } from '../../../utils/interface';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
const btnstyle = { margin: '0.5rem 0' };

const Input = styled(TextField)<any>`
  background-color: #fff;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

export default function Profile() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setimage] = useState<string>('');

  const getMe = async () => {
    try {
      const data = await authApi.me();
      console.log(user);
      setUser(data);
      setUserName(data.username);
      setFullname(data.fullname);
      setPhone(data.phone);
      setEmail(data.email);
      setImageUrl(data.image_url);
    } catch (error: any) {
      toast.error('Get Infomation error');
    }
  };

  const onHandleImageChange = (e: any) => {
    setimage(e.target.files[0]);
  };

  const handleChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangeFullname = (e: any) => {
    setFullname(e.target.value);
  };

  const onClick = async () => {
    let image_url = imageUrl;
    const asd = new FormData();
    asd.append('file', image);
    asd.append('upload_preset', 'ceh3abtd');

    if (image) {
      const cloudinaryResponse: any = await axios
        .post('https://api.cloudinary.com/v1_1/hunghamhoc/image/upload', asd, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data`,
          },
        })
        .catch((err: any) => toast.error('Upload image error'));
      image_url = cloudinaryResponse?.data?.url;
    }

    // .then((res) => console.log(res));

    const data: IUpdateUser = {
      fullname,
      image_url,
      email,
      phone,
    };

    await userApi.updateUser(data).catch((error: any) => {
      return toast.error('update error');
    });
    toast.success('update success');
    getMe();
  };

  useEffect(() => {
    getMe();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      {imageUrl && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <Avatar sx={{ width: '150px', height: '150px', margin: '1rem auto 2rem' }} src={imageUrl}></Avatar>
            <CloseIcon
              sx={{
                fill: 'red',
                position: 'absolute',
                zIndex: 2,
                top: '10%',
                right: '10%',
                background: 'white',
                borderRadius: '50%',
              }}
              onClick={() => setImageUrl('')}
            />
          </div>
        </div>
      )}
      {image && !imageUrl && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <Avatar
              sx={{ width: '150px', height: '150px', margin: '1rem auto 2rem' }}
              // @ts-ignore
              src={URL.createObjectURL(image)}
            ></Avatar>
            <CloseIcon
              sx={{
                fill: 'red',
                position: 'absolute',
                zIndex: 2,
                top: '10%',
                right: '10%',
                background: 'white',
                borderRadius: '50%',
              }}
              onClick={() => setimage('')}
            />
          </div>
        </div>
      )}

      {!image && !imageUrl && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <label
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'white',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '1rem auto 2rem',
              }}
              htmlFor="inputimage"
            >
              <AddIcon />
            </label>
            <input style={{ display: 'none' }} id="inputimage" onChange={onHandleImageChange} type="file"></input>
          </div>
        </div>
      )}
      <div>
        <div style={{ width: '500px', margin: 'auto' }}>
          <Input
            style={btnstyle}
            value={username}
            label="Username"
            placeholder="Enter title"
            disabled
            fullWidth
            required
            // onChange={handleChangeTitle}
          />
        </div>
      </div>
      <div>
        <div style={{ width: '500px', margin: 'auto' }}>
          <Input
            style={btnstyle}
            value={fullname}
            label="Fullname"
            placeholder="Enter title"
            fullWidth
            required
            onChange={handleChangeFullname}
          />
        </div>
      </div>
      <div>
        <div style={{ width: '500px', margin: 'auto' }}>
          <Input
            style={btnstyle}
            value={email}
            label="Email"
            placeholder="Enter title"
            fullWidth
            required
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <div>
        <div style={{ width: '500px', margin: 'auto' }}>
          <Input
            style={btnstyle}
            value={phone}
            label="Phone"
            placeholder="Enter title"
            fullWidth
            required
            onChange={handleChangePhone}
          />
        </div>
      </div>

      <div style={{ margin: '2rem', textAlign: 'center' }}>
        <Button variant="outlined" onClick={onClick}>
          Lưu
        </Button>
      </div>
    </Layout>
  );
}
