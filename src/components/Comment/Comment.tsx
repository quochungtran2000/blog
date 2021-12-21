import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import { useUser } from '../../context/User';
import commentApi from '../../api/commentApi';

type Props = {
  id: number;
  reloadComment: () => void
};

export default function Comment({ id, reloadComment }: Props) {
  const [comment, setComment] = React.useState<string>('');

  const onChange = (e: any) => {
    setComment(e.target.value);
  };
  const onClick = async () => {
    console.log(comment);
    await commentApi.create(id, comment).catch((error: any) => {
      toast.error('Bình luận thất bại');
    });
    toast.success('Bình luận thành công');
    setComment('');
    reloadComment();
  };
  const { user } = useUser();
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={user ? 'Viết bình luận' : 'Vui lòng đăng nhập để bình luận'}
        inputProps={{ 'aria-label': 'Viết bình luận' }}
        value={comment}
        onChange={onChange}
      />
      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      {user && (
        <>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={onClick}>
            <SendIcon />
          </IconButton>
        </>
      )}
    </Paper>
  );
}
