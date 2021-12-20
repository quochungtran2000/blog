import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Avatar } from '@mui/material';
import { IJob } from '../../utils/interface';
import HideSource from '@mui/icons-material/HideSource'
import LoadingIcon from '../Loading/LoadingIcon';

type Props = {
  data: IJob[]
  loading: boolean
}

export default function NewJob({data, loading}: Props) {
  return (
    <React.Fragment>
      <Title>Việc làm mới nhất</Title>
      <Table size="small">
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
          {!loading && data.map((job) => (
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
              <TableCell align="center"><HideSource sx={{fill: 'orange'}}/></TableCell>
            </TableRow>
          ))}
          {loading && (<TableCell colSpan={8} align="center" sx={{height: '50px'}}>
            <LoadingIcon/>
          </TableCell>)}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders   -webkit-box-orient: vertical;  -webkit-line-clamp: 2;
      </Link> */}
    </React.Fragment>
  );
}
