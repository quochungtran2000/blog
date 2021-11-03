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

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SHeaderWrapper>
      <SHeaderLeft>
        <SHeaderBlogTitle>Coding Blog</SHeaderBlogTitle>
      </SHeaderLeft>
      <SHeaderRight>
        <SHeaderSearchBar></SHeaderSearchBar>
        <SHeaderNaviconRight>
          <SHeaderNaviconLable>Dark Mode</SHeaderNaviconLable>
          <DarkModeButton onClick={setTheme} theme={theme} />
        </SHeaderNaviconRight>
      </SHeaderRight>
    </SHeaderWrapper>
  );
};

export default Header;
