import { useState, Fragment, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { IDistrict } from '../../utils/interface';
import { locationApi } from '../../api';
import { toast } from 'react-toastify';
import { DashBoardLayout } from '.';
import useQueryParams from '../../hook/useQueryParam';
import { useHistory, useLocation } from 'react-router-dom';
import * as queryString from 'query-string';
// import ConstructionIcon from '@mui/icons-material/Construction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TableContainer,
  TablePagination,
} from '@mui/material';
import { useTheme } from '../../context/Theme';

export default function District() {
  const [district, setDistrict] = useState<IDistrict[]>([]);
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

  const getCity = async (params: any) => {
    try {
      const { data, total } = await locationApi.districts(params);
      setDistrict(data);
      setTotal(total);
      setCloseBackdrop();
    } catch (err: any) {
      toast.error(err.message);
      setCloseBackdrop();
    }
  };

  useEffect(() => {
    setOpenBackdrop();
    getCity({ page, page_size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  console.log(district);
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
                <Title>Danh sách Quận Huyện</Title>
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
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Tên</TableCell>
                      <TableCell>Mã City</TableCell>
                      {/* <TableCell>Sửa</TableCell> */}
                      <TableCell>Xóa</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {district.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.city_id}</TableCell>
                        {/* <TableCell>
                          <ConstructionIcon style={{ fill: 'orange' }} />
                        </TableCell> */}
                        <TableCell>
                          <DeleteForeverIcon style={{ fill: 'red' }} />
                        </TableCell>
                      </TableRow>
                    ))}
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
