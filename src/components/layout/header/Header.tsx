import { DarkModeButton } from '../DarkModeButton';
import {
  SHeaderBlogTitle,
  SHeaderLeft,
  SHeaderNaviconLable,
  SHeaderNaviconRight,
  SHeaderRight,
  SHeaderWrapper,
  SHeaderLogginNameButton,
} from './Header.styled';
import { useTheme } from '../../../context/Theme';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import RegisterModal from '../../modal/RegisterModal';
import LoginModal from '../../modal/LoginModal';
import { useUser } from '../../../context/User';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  const onOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleOpenClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  return (
    <SHeaderWrapper>
      <SHeaderLeft>
        <SHeaderBlogTitle>L2H Forum</SHeaderBlogTitle>
      </SHeaderLeft>
      <SHeaderRight>
        {/* <SHeaderSearchBar></SHeaderSearchBar> */}
        <SHeaderNaviconRight>
          <SHeaderNaviconLable>Dark Mode</SHeaderNaviconLable>
          <DarkModeButton onClick={setTheme} theme={theme} />
          {user && (
            <div style={{ display: 'flex' }}>
              <Avatar
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                src={'../../assets/images/avatarpng.png'}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ marginLeft: '1rem' }}
              />
              <SHeaderLogginNameButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {user.username}
              </SHeaderLogginNameButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: 'none' }} to="/my-post" onClick={handleClose}>
                    My Post
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: 'none' }} to="/my-post-request" onClick={handleClose}>
                    My Post Request
                  </Link>
                </MenuItem>

                {user.role.toLowerCase() === 'hr' && (
                  <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none' }} to="/create-job" onClick={handleClose}>
                      Create Job
                    </Link>
                  </MenuItem>
                )}
                <MenuItem>
                  <Link style={{ textDecoration: 'none' }} to="/create-post" onClick={handleClose}>
                    Create Post
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link style={{ textDecoration: 'none' }} to="/change-password" onClick={handleClose}>
                    Change Password
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
          {!user && (
            <>
              <div>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={onOpenLogin}
                >
                  Login
                </Button>
                <LoginModal open={openLogin} onClose={handleOpenClose} onOpenRegister={onOpenRegister}></LoginModal>
              </div>
              <div>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={onOpenRegister}
                >
                  Register
                </Button>
                <RegisterModal open={openRegister} onClose={handleOpenClose} onOpenLogin={onOpenLogin}></RegisterModal>
              </div>
            </>
          )}
        </SHeaderNaviconRight>
      </SHeaderRight>
    </SHeaderWrapper>
  );
};

export default Header;
