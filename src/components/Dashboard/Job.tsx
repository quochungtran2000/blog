import { useState, Fragment, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { IJob } from '../../utils/interface';
import { careerApi } from '../../api';
import { toast } from 'react-toastify';
import { DashBoardLayout } from '.';
import useQueryParams from '../../hook/useQueryParam';
import { useHistory, useLocation } from 'react-router-dom';
import * as queryString from 'query-string';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TableContainer,
  TablePagination,
} from '@mui/material';
import LoadingIcon from '../Loading/LoadingIcon';
import HideSource from '@mui/icons-material/HideSource';

export default function Ward() {
  const [total, setTotal] = useState<number>(0);
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();

  const params = useQueryParams();
  const page = Number(params?.page) || 1;
  const page_size = Number(params?.page_size) || 15;

  const handleChangePage = (event: any, newPage: any) => {
    const newParams = { ...params, page: newPage };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newParams, {
        skipEmptyString: true,
      }),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const handleChangeKeyword = (event: any) => {
  //   const newParams = { ...params, keyword: event.target.value };
  //   history.push({
  //     pathname: location.pathname,
  //     search: queryString.stringify(newParams, {
  //       skipEmptyString: true,
  //     }),
  //   });
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  const handleChangeRowsPerPage = (event: any) => {
    const newParams = { ...params, page_size: +event.target.value };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newParams, {
        skipEmptyString: true,
      }),
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNewJob = async (params: any) => {
    try {
      const { data, total } = await careerApi.jobs(params);
      setJobs(data);
      setTotal(total);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('get total new user false');
    }
  };

  // const getWard = async (params: any) => {
  //   try {
  //     const { data, total } = await locationApi.wards(params);
  //     setWard(data);
  //     setTotal(total);
  //     setCloseBackdrop();
  //   } catch (err: any) {
  //     toast.error(err.message);
  //     setCloseBackdrop();
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    getNewJob({ page, page_size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  return (
    <DashBoardLayout>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              // height: 240,
              width: '100%',
              margin: '2rem 0 0 0',
            }}
          >
            <Fragment>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Title>Danh sách việc làm</Title>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="input-with-icon-adornment">Tìm kiếm</InputLabel>
                  <Input
                    // onChange={handleChangeKeyword}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <TableContainer>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell sx={{ maxWidth: '150px' }}>Tiêu đề</TableCell>
                      <TableCell>Tác giả</TableCell>
                      <TableCell>Level</TableCell>
                      <TableCell>Địa chỉ</TableCell>
                      <TableCell>Ngày tạo</TableCell>
                      <TableCell>Lượt xem</TableCell>
                      <TableCell align="right">Ẩn bài</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!loading &&
                      jobs.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell>
                            <Avatar
                              sx={{ bgcolor: 'Highlight', height: '50px', width: '100%', maxWidth: '50px' }}
                              variant="square"
                            />
                          </TableCell>
                          <TableCell sx={{ maxWidth: '150px' }}>
                            <div
                              style={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                              }}
                            >
                              {job.title}
                            </div>
                          </TableCell>
                          <TableCell>{job.author.fullname}</TableCell>
                          <TableCell>{job.level}</TableCell>
                          <TableCell>{job.location.city_name}</TableCell>
                          <TableCell>{new Date(job.create_date).toLocaleDateString('en-GB')}</TableCell>
                          <TableCell align="center">123</TableCell>
                          <TableCell align="center">
                            <HideSource sx={{ fill: 'orange' }} />
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
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 15, 20, 25, 50, 100]}
                component="div"
                count={total}
                rowsPerPage={page_size}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Fragment>
          </Paper>
        </Grid>
      </Grid>
    </DashBoardLayout>
  );
}
