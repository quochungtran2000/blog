import React from "react"; // , { useState }
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

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = () => {
  // const [open, setOpen] = useState(false);

  // const onOpenClick = () => {
  //   setOpen(!open);
  // };

  return (
    <SNavBar>
      <SNavBarNav>
        <SNavBarLogo>
          <SNavBarLink to="/asd">
            <span>Coding</span>
            <ArrowRightIcon />
          </SNavBarLink>
        </SNavBarLogo>

        <SNavBarItem>
          <SNavBarLink to="/">
            <HomeIcon />
            <span>Home</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink to="/">
            <TrendingIcon />
            <span>Trending</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink to="/">
            <HomeIcon />
            <span>Home</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink to="/">
            <CategoryIcon />
            <span>Category</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink to="/">
            <AboutIcon />
            <span>About</span>
          </SNavBarLink>
        </SNavBarItem>

        <SNavBarItem>
          <SNavBarLink to="/">
            <ContactIcon />
            <span>Contact</span>
          </SNavBarLink>
        </SNavBarItem>
      </SNavBarNav>
    </SNavBar>
  );
};

export default SideBar;
