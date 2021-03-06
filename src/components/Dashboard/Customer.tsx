import { useState, Fragment, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { ICustomer } from '../../utils/interface';
import { userApi } from '../../api';
import { toast } from 'react-toastify';
import { DashBoardLayout } from '.';
import useQueryParams from '../../hook/useQueryParam';
import { useHistory, useLocation } from 'react-router-dom';
import * as queryString from 'query-string';
import SearchIcon from '@mui/icons-material/Search';
import Unpublished from '@mui/icons-material/Unpublished';
import PublicIcon from '@mui/icons-material/Public';
import {
  Avatar,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Paper,
  TableContainer,
  TablePagination,
} from '@mui/material';
import { useTheme } from '../../context/Theme';

export default function Customer() {
  const [customer, setCustomer] = useState<ICustomer[]>([]);
  const [total, setTotal] = useState<number>(0);
  const location = useLocation();
  const history = useHistory();
  const { setOpenBackdrop, setCloseBackdrop } = useTheme();

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

  const getCustomer = async (params: any) => {
    try {
      const { data, total } = await userApi.getUsers(params);
      setCustomer(data);
      setTotal(total);
      setCloseBackdrop();
    } catch (err: any) {
      toast.error(err.message);
      setCloseBackdrop();
    }
  };

  const banUser = async (id: number) => {
    await userApi.delete(id)
    toast.success("C???m th???nh c??ng");
    getCustomer({page,page_size})
  }


  useEffect(() => {
    setOpenBackdrop();
    getCustomer({ page, page_size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  console.log(customer);
  console.log(page);

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
                <Title>Danh s??ch th??nh vi??n</Title>
                <FormControl variant="outlined">
                  {/* <InputLabel htmlFor="input-with-icon-adornment">T??m ki???m</InputLabel> */}
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
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>T??n</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>S??? ??i???n tho???i</TableCell>
                      <TableCell>Quy???n</TableCell>
                      <TableCell>Ng??y tham gia</TableCell>
                      <TableCell>Tr???ng th??i</TableCell>
                      <TableCell>Kh??a/M???</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customer?.map((row, index) => {
                      const [role] = row.partner_role;

                      return (
                        <TableRow key={row.id}>
                          <TableCell>
                            <Avatar src={row.image_url}>H</Avatar>
                          </TableCell>

                          <TableCell>{row.fullname}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell>{role.role.role}</TableCell>
                          <TableCell>{new Date(row.create_date).toLocaleDateString('en-GB')}</TableCell>
                          <TableCell>
                            {/* <ConstructionIcon style={{ fill: 'orange' }} /> */}
                            {row.ban ? 'B??? c???m' : 'Ho???t ?????ng'}
                          </TableCell>
                          <TableCell>
                            {!row.ban ? (
                              <Unpublished style={{ fill: 'orange' }} onClick={() => banUser(row.id)} />
                            ) : (
                              <PublicIcon style={{ fill: 'green' }} />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
