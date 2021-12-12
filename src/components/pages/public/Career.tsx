import { Layout } from '../../layout';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { IJob } from '../../../utils/interface';
import { useEffect, useState } from 'react';
// import categoryApi from '../../../api/categoryApi';
import useQueryParams from '../../../hook/useQueryParam';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';
// import DeleteIcon from "@mui/icons-material/Delete";
// import HandymanIcon from "@mui/icons-material/Handyman";
import { JobCard } from '../../card/JobCard';
import { careerApi } from '../../../api';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Career() {
  // const [category, setCategory] = useState<ICategory[]>([]);
  const [jobs, setJobs] = useState<IJob[]>([]);

  const queryParams = useQueryParams();
  const page = queryParams.page || 1;
  const page_size = queryParams.page_size || 1;

  // const getCategory = async () => {
  //   try {
  //     const { data } = await categoryApi.categories({ page, page_size });
  //     setCategory(data);
  //   } catch (err: any) {
  //     toast.error(err.message);
  //   }
  // };

  const getJob = async () => {
    try {
      const { data } = await careerApi.jobs({ page, page_size });
      setJobs(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);

  // console.log(category);

  // useEffect(() => {
  //   getCategory();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page, page_size]);
  return (
    <Layout>
      <div style={{ height: 'calc(100% - 100px)', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ textAlign: 'left', margin: '1rem 0' }}>Career</h3>
        {/* <h3 style={{ margin: "0 0 1rem 0" }}>Category</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Slug</TableCell>
              <TableCell align="right">Parent Id</TableCell>
              <TableCell align="right">Create Date</TableCell>
              <TableCell align="right">Update Date</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.slug}</TableCell>
                <TableCell align="right">{row.parent_id}</TableCell>
                <TableCell align="right">
                  {new Date(row.create_date).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  {new Date(row.update_date).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <HandymanIcon sx={{ color: "orange" }}></HandymanIcon>
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteIcon sx={{ color: "red" }}></DeleteIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
        <div style={{ flex: 1 }}>
          <Grid container spacing={2}>
            {jobs?.map((item, index) => (
              <Grid key={index} item md={6} sm={6} xl={6}>
                <JobCard data={item} count={index}></JobCard>
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid container>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
