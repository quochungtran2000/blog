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
import { ITheme } from "../../../styles/theme";
// import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

interface HeaderProps {
  theme: string;
  onDarkModeClick?(e: any): void;
  themeColor: ITheme;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <SHeaderWrapper>
      <SHeaderLeft>
        {/* <MenuIcon></MenuIcon> */}
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
