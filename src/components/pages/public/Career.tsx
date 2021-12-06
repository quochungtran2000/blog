import { Layout } from "../../layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICategory } from "../../../utils/interface";
import { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";
import useQueryParams from "../../../hook/useQueryParam";
import { toast } from "react-toastify";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HandymanIcon from "@mui/icons-material/Handyman";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Career() {
  const [category, setCategory] = useState<ICategory[]>([]);

  const queryParams = useQueryParams();
  const page = queryParams.page || 1;
  const page_size = queryParams.page_size || 1;

  const getCategory = async () => {
    try {
      const { data } = await categoryApi.categories({ page, page_size });
      setCategory(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  console.log(category);

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, page_size]);
  return (
    <Layout>
      <h3 style={{ margin: "0 0 1rem 0" }}>Category</h3>
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
      </TableContainer>
    </Layout>
  );
}
