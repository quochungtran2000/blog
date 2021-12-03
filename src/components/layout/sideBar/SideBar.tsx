import { ReactComponent as HomeIcon } from "../../../assets/icons/home-icon.svg";
import { ReactComponent as CategoryIcon } from "../../../assets/icons/category.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right.svg";
// import { ReactComponent as MostCommentIcon } from "../../../assets/icons";
import { ReactComponent as TrendingIcon } from "../../../assets/icons/trending.svg";
// import { ReactComponent as LinkedIcon } from "../../../assets/icons/linked.svg";
// import { ReactComponent as MessengerIcon } from "../../../assets/icons/messenger.svg";
// import { ReactComponent as SkypeIcon } from "../../../assets/icons/skype.svg";
// import { ReactComponent as EmailIcon } from "../../../assets/icons/email.svg";
import { ReactComponent as ContactIcon } from "../../../assets/icons/contact.svg";
import { ReactComponent as AboutIcon } from "../../../assets/icons/about.svg";
// import { ReactComponent as SignUpIcon } from "../../../assets/icons/sign-up.svg";
// import { ReactComponent as SignInIcon } from "../../../assets/icons/sign-in.svg";
// import { ReactComponent as JobIcon } from "../../../assets/icons/job.svg";
import {
  SNavBar,
  SNavBarNav,
  SNavBarLogo,
  SNavBarLink,
  SNavBarItem,
} from "./SideBar.styled";
import { memo } from "react";
import { useSideBar } from "../../../context/SideBar";
import { useTheme } from "../../../context/Theme";
// import { useTheme } from "../../../context/Theme";

const SideBar = () => {
  const { open, setOpen } = useTheme();

  console.log(`open`, open);

  return (
    <SNavBar open={open}>
      <SNavBarNav>
        <SNavBarLogo open={open}>
          <SNavBarLink
            open={open}
            onClick={(e: any) => {
              e.preventDefault();
              setOpen();
            }}
            to="/"
          >
            <span>Coding</span>
            <ArrowRightIcon />
          </SNavBarLink>
        </SNavBarLogo>

        <SNavBarItem>
          <SNavBarLink open={open} to="/">
            <HomeIcon />
            <span>Home</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink open={open} to="/post">
            <TrendingIcon />
            <span>Trending</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink open={open} to="/post">
            <HomeIcon />
            <span>Post</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink open={open} to="/career">
            <CategoryIcon />
            <span>Career</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink open={open} to="/">
            <AboutIcon />
            <span>About</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink open={open} to="/contact">
            <ContactIcon />
            <span>Contact</span>
          </SNavBarLink>
        </SNavBarItem>
      </SNavBarNav>
    </SNavBar>
  );
};

export default memo(SideBar);
