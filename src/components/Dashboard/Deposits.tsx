import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

type Props = {
  newUser: number
  total: number
}

export default function Deposits(props: Props) {
  return (
    <React.Fragment>
      <Title>Thành viên mới</Title>
      <Typography component="p" variant="h4">
        + {props.newUser}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Trong ngày {new Date().toLocaleDateString('en-GB')}
      </Typography>
      <Typography color="text.secondary">
        Tổng: {props.total}
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}
