import React, { useState } from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as ArrowDownnIcon } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
// import { ReactComponent as LinkedIcon } from "../../assets/icons/linked.svg";
import { ReactComponent as MessengerIcon } from "../../assets/icons/messenger.svg";
import { ReactComponent as SkypeIcon } from "../../assets/icons/skype.svg";
import { ReactComponent as EmailIcon} from '../../assets/icons/email.svg'
import { ReactComponent as ContactIcon} from '../../assets/icons/contact.svg'
import { ReactComponent as AboutIcon} from '../../assets/icons/about.svg'
import { ReactComponent as SignUpIcon} from '../../assets/icons/sign-up.svg'
import { ReactComponent as SignInIcon} from '../../assets/icons/sign-in.svg'
import { ReactComponent as JobIcon} from '../../assets/icons/job.svg'
import {
  SNavDesktop,
  SNavDesktopItem,
  SNavItemLink,
  // SNavMobile,
  // SNavMobileItem,
  SNavDesktopSocial,
  SSideBar,
  SNavTiemLabel,
  SNavItemSubMenu,
  SNavSubMenuItemLink,
} from "./SideBar.styled";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = (props: SideBarProps) => {
  const [open, setOpen] = useState(false);

  const onOpenClick = () => {
    setOpen(!open);
  };

  return (
    <SSideBar>
      <SNavDesktop>
        <SNavDesktopItem bold="true">
          <SNavItemLink href="/">
            <HomeIcon />
            <span>Trang Chủ</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopItem bold={true} break={true} onClick={onOpenClick}>
          <SNavTiemLabel open={open}>
            <CategoryIcon />
            <span>Category</span>
            <ArrowDownnIcon />
          </SNavTiemLabel>

          <SNavItemSubMenu open={open}>
            <SNavSubMenuItemLink>
              <SNavItemLink href="/category1">
                <span>Category 1</span>
              </SNavItemLink>
            </SNavSubMenuItemLink>

            <SNavSubMenuItemLink>
              <SNavItemLink href="/category2">
                <span>Category 2</span>
              </SNavItemLink>
            </SNavSubMenuItemLink>

            <SNavSubMenuItemLink>
              <SNavItemLink href="/category3">
                <span>Category 3</span>
              </SNavItemLink>
            </SNavSubMenuItemLink>
          </SNavItemSubMenu>
        </SNavDesktopItem>

        <SNavDesktopItem>
          <SNavItemLink href="/">
            <AboutIcon />
            <span>About</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopItem>
          <SNavItemLink href="/">
            <ContactIcon />
            <span>Contact</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopItem break={true}>
          <SNavItemLink href="/">
            <JobIcon />
            <span>Carrer</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopItem>
          <SNavItemLink href="/">
            <SignInIcon />
            <span>Sign In</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopItem>
          <SNavItemLink href="/">
            <SignUpIcon />
            <span>Sign Up</span>
          </SNavItemLink>
        </SNavDesktopItem>

        <SNavDesktopSocial>
          <a href="https://github.com/quochungtran2000">
            <GithubIcon />
          </a>
          <a href="https://m.me/tranquochung6810">
            <MessengerIcon />
          </a>
          <a href="https://facebook.com/tranquochung6810">
            <FacebookIcon />
          </a>

          <a href="skype:live:.cid.6343f3ff5edc8a7e?chat">
            <SkypeIcon />
          </a>
          {/* <a href="/">
            <LinkedIcon />
          </a> */}

          <a href="mailto:tranquochung6810@gmail.com">
            <EmailIcon />
          </a>
          
        </SNavDesktopSocial>
      </SNavDesktop>

      {/* <SNavMobile>
        <SNavMobileItem>FAKAGJAG</SNavMobileItem>
        <SNavMobileItem>HAGJDNEJS</SNavMobileItem>
        <SNavMobileItem>KÂFJADFN</SNavMobileItem>
        <SNavMobileItem>ÁDFASDFASF</SNavMobileItem>
        <SNavMobileItem>ADGAGFASF</SNavMobileItem>
        <SNavMobileItem>ÀGAFGASFG</SNavMobileItem>
      </SNavMobile> */}
    </SSideBar>
  );
};

export default SideBar;
