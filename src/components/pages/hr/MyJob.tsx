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
import { IJob } from '../../../utils/interface';
import { careerApi } from '../../../api';
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

export default function MyJob() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getJob = async () => {
    try {
      const { data, total } = await careerApi.myJob({ page: 1, page_size: 10 });
      console.log({ total, data });
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('get total new user false');
    }
  };
  useEffect(() => {
    setLoading(true);
    getJob();
  }, []);

  return (
    <Layout>
      <Box>
        <CustomPaper>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <React.Fragment>
                <Typography component="h2" variant="h6" gutterBottom>
                  Việc làm của tôi
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <CustomTableCell></CustomTableCell>
                      <CustomTableCell sx={{ maxWidth: '400px' }}>Tiêu đề</CustomTableCell>
                      <CustomTableCell>Level</CustomTableCell>
                      <CustomTableCell>Ngày tạo</CustomTableCell>
                      <CustomTableCell>Ngày cập nhật</CustomTableCell>
                      <CustomTableCell>Lượt xem</CustomTableCell>
                      <CustomTableCell>Sửa</CustomTableCell>
                      <CustomTableCell align="right">Xóa</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!loading && jobs?.map((post) => (
                      <TableRow key={post.id}>
                        <CustomTableCell>
                          <Avatar
                            sx={{ bgcolor: 'Highlight', height: '50px', width: '100%', maxWidth: '50px' }}
                            variant="square"
                            src={"https://daihoc.fpt.edu.vn/media/2019/12/nhan-vien-kms-technology-source-careerbuilder.jpg"}
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
                        <CustomTableCell>{post.level}</CustomTableCell>
                        <CustomTableCell>{new Date(post.create_date).toLocaleDateString('en-GB')}</CustomTableCell>
                        <CustomTableCell>{new Date(post.update_date).toLocaleDateString('en-GB')}</CustomTableCell>
                        <CustomTableCell align="center">123</CustomTableCell>
                        <CustomTableCell align="center">
                          <Link to={`update-post/${post.id}`}>
                            <ConstructionIcon sx={{ fill: 'orange' }} />
                          </Link>
                        </CustomTableCell>
                        <CustomTableCell align="center">
                          <DeleteForeverIcon sx={{ fill: 'red' }} />
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
