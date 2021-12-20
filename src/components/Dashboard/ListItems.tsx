import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Bài đăng" />
      </ListItem>
    </Link>
    <Link to="/dashboard/customer" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Thành viên" />
      </ListItem>
    </Link>
    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Yêu cầu" />
      </ListItem>
    </Link>
    <Link to="/dashboard/job" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <WorkOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Việc làm" />
      </ListItem>
    </Link>
    <Link to="/dashboard/city" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ApartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tỉnh/Thành phố" />
      </ListItem>
    </Link>
    <Link to="/dashboard/district" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary="Quận/Huyện" />
      </ListItem>
    </Link>
    <Link to="/dashboard/ward" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <EditRoadIcon />
        </ListItemIcon>
        <ListItemText primary="Phường/Xã" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
