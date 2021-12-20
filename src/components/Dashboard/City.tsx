import { useState, Fragment, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { ICity } from '../../utils/interface';
import { locationApi } from '../../api';
import { toast } from 'react-toastify';
import { DashBoardLayout } from '.';
import { Grid, Paper, TableContainer, TablePagination } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function City() {
  const [city, setCity] = useState<ICity[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [page, setPage] = useState(0);
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getCity = async () => {
    try {
      const { data, total } = await locationApi.city();
      setCity(data);
      setTotal(total);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(city);

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
              <Title>Danh sách tỉnh thành phố</Title>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell sx={{ maxWidth: '100%' }}>Tên</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Sửa</TableCell>
                      <TableCell>Xóa</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {city.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell sx={{ maxWidth: '100%' }}>{row.name}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <ConstructionIcon style={{ fill: 'orange' }} />
                        </TableCell>
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
                rowsPerPage={rowsPerPage}
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
