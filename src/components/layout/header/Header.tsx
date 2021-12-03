import { DarkModeButton } from "../DarkModeButton";
import {
  SHeaderBlogTitle,
  SHeaderLeft,
  SHeaderNaviconLable,
  SHeaderNaviconRight,
  SHeaderRight,
  SHeaderSearchBar,
  SHeaderWrapper,
} from "./Header.styled";
import { useTheme } from "../../../context/Theme";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SHeaderWrapper>
      <SHeaderLeft>
        <SHeaderBlogTitle>Coding Blog</SHeaderBlogTitle>
      </SHeaderLeft>
      <SHeaderRight>
        {/* <SHeaderSearchBar></SHeaderSearchBar> */}
        <SHeaderNaviconRight>
          <SHeaderNaviconLable>Dark Mode</SHeaderNaviconLable>
          <DarkModeButton onClick={setTheme} theme={theme} />
          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </SHeaderNaviconRight>
      </SHeaderRight>
    </SHeaderWrapper>
  );
};

export default Header;
