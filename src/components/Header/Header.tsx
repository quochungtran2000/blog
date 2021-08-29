import { ReactChild } from "react";
import { DarkModeButton } from "../ui-kits/DarkModeButton";
import {
  SHeaderBlogTitle,
  SHeaderLeft,
  SHeaderNaviconLable,
  SHeaderNaviconRight,
  SHeaderRight,
  SHeaderSearchBar,
  SHeaderWrapper,
} from "./Header.styled";
import { ITheme } from "../../theme";
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'

interface HeaderProps {
  theme: string;
  onDarkModeClick?(e: any): void;
  themeColor: ITheme;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <SHeaderWrapper>
      <SHeaderLeft>
        <MenuIcon></MenuIcon>
        <SHeaderBlogTitle>Coding Blog</SHeaderBlogTitle>
      </SHeaderLeft>
      <SHeaderRight>
        <SHeaderSearchBar></SHeaderSearchBar>
        <SHeaderNaviconRight>
          <SHeaderNaviconLable>Dark Mode</SHeaderNaviconLable>
          <DarkModeButton onClick={props.onDarkModeClick} theme={props.theme} />
        </SHeaderNaviconRight>
      </SHeaderRight>
    </SHeaderWrapper>
  );
};

export default Header;
