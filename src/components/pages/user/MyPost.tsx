import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { Layout } from '../../layout';
import styled from 'styled-components';
import LoadingIcon from '../../Loading/LoadingIcon';
import { IPost } from '../../../utils/interface';
import { postApi } from '../../../api';
import { toast } from 'react-toastify';
import ConstructionIcon from '@mui/icons-material/Construction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const CustomPaper = styled(Paper)<any>`
  background-color: ${({ theme }) => theme.headerColor}!important;
  color: ${({ theme }) => theme.textColor}!important;
`;

const CustomTableCell = styled(TableCell)<any>`
  background-color: ${({ theme }) => theme.headerColor}!important;
  color: ${({ theme }) => theme.textColor}!important;
`;

export default function MyPost() {
  const [posts, sePosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getNewPost = async () => {
    try {
      const { data,total } = await postApi.myPost({ page: 1, page_size: 10 });
      console.log({total})
      sePosts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('get total new user false');
    }
  };

  const onClick = async (id: number) => {
    await postApi.delete(id).catch((error: any) => {
      return toast.error('Xóa bài không thành công');
    })
    toast.success("Xóa bài thành công");
    getNewPost();
  }
  useEffect(() => {
    setLoading(true);
    getNewPost();
  }, []);

  return (
    <Layout>
      <Box>
        <CustomPaper>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <React.Fragment>
                <Typography component="h2" variant="h6" gutterBottom>
                  Bài đăng của tôi
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <CustomTableCell></CustomTableCell>
                      <CustomTableCell sx={{ maxWidth: '400px' }}>Tiêu đề</CustomTableCell>
                      <CustomTableCell>Ngày tạo</CustomTableCell>
                      <CustomTableCell>Ngày cập nhật</CustomTableCell>
                      <CustomTableCell>Lượt xem</CustomTableCell>
                      <CustomTableCell>Sửa</CustomTableCell>
                      <CustomTableCell align="right">Xóa</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {posts?.map((post) => (
                      <TableRow key={post.id}>
                        <CustomTableCell>
                          <Avatar
                            sx={{ bgcolor: 'Highlight', height: '50px', width: '100%', maxWidth: '50px' }}
                            variant="square"
                            src={post.image_url}
                          />
                        </CustomTableCell>
                        <CustomTableCell sx={{ maxWidth: '400px' }}>
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
                        </CustomTableCell>
                        <CustomTableCell>{new Date(post.create_date).toLocaleDateString('en-GB')}</CustomTableCell>
                        <CustomTableCell>{new Date(post.update_date).toLocaleDateString('en-GB')}</CustomTableCell>
                        <CustomTableCell align="center">123</CustomTableCell>
                        <CustomTableCell align="center">
                          <Link to={`update-post/${post.id}`}>
                          <ConstructionIcon sx={{ fill: 'orange' }} />
                          </Link>
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <DeleteForeverIcon sx={{ fill: 'red' }} onClick={() => onClick(post.id)}/>
                        </CustomTableCell>
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
            </Grid>
          </Container>
        </CustomPaper>
      </Box>
    </Layout>
  );
}
