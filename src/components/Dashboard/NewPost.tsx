import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Avatar } from '@mui/material';
import { IPost } from '../../utils/interface';
import HideSource from '@mui/icons-material/HideSource';
import LoadingIcon from '../Loading/LoadingIcon';
import { postApi } from '../../api';
import { toast } from 'react-toastify';

type Props = {
  data: IPost[];
  loading: boolean;
  reload: () => void
};

export default function Post({ data, loading,reload }: Props) {

  const onClick = async(id:number) => {
    await postApi.delete(id).catch((error:any) => {
      return toast.error("Xoá bài không thành công")
    })
    toast.success("Xóa bài thành công")
    reload();
  }

  return (
    <React.Fragment>
      <Title>Bài đăng mới nhất</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ maxWidth: '400px' }}>Tiêu đề</TableCell>
            <TableCell>Tác giả</TableCell>
            <TableCell>Ngày tạo</TableCell>
            <TableCell>Lượt xem</TableCell>
            <TableCell align="right">Ẩn bài</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            data.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Avatar
                    sx={{ bgcolor: 'Highlight', height: '50px', width: '100%', maxWidth: '50px' }}
                    variant="square"
                    src={post.image_url}
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: '400px' }}>
                  <div
                    style={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 1,
                    }}
                  >
                    {post.title}
                  </div>
                </TableCell>
                <TableCell>{post.author.fullname}</TableCell>
                <TableCell>{new Date(post.create_date).toLocaleDateString('en-GB')}</TableCell>
                <TableCell align="center">123</TableCell>
                <TableCell align="center">
                  <HideSource sx={{ fill: 'orange' }} onClick={() => onClick(post.id)} />
                </TableCell>
              </TableRow>
            ))}
          {loading && (
            <TableCell colSpan={8} align="center" sx={{ height: '50px' }}>
              <LoadingIcon />
            </TableCell>
          )}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders   -webkit-box-orient: vertical;  -webkit-line-clamp: 2;
      </Link> */}
    </React.Fragment>
  );
}
