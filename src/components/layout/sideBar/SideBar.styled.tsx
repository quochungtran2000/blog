import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { transitionSpeed } from "../../../application.constant";
import { SMain } from "../Layout/Layout.styled";
// import { SideBarMode } from "../../../context/Theme";

// type NavProps = {
//   sideMode: SideBarMode
// }

export const SNavBar = styled.nav<any>`
  position: fixed;
  left: 0;
  background-color: ${({ theme }) => theme.headerColor};
  width: 4rem;
  height: 100vh;
  transition: width ${transitionSpeed} ease;
  font-size: ${({ theme }) => theme.font90};

  @media (min-width: 600px) {
    top: 0;
    width: 4rem;
    height: 100vh;

    ${(props) =>
      props.open &&
      css`
        width: 14rem;
        & ~ ${SMain} {
          margin-left: 14rem;
        }
      `}// &:hover {
    //   width: 14rem;
    // }

    // &:hover ~ ${SMain} {
    //   margin-left: 14rem;
    // }
  }

  @media (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 4rem;
    z-index:1;
  }
`;

export const SNavBarNav = styled.ul`
  list-style: none;
  padding: calc(60px + 15px) 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: 600px) {
  }
`;

export const SNavBarLogo = styled.li<any>`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  width: 100%;

  svg {
    transform: rotate(0deg);
    transition: ${transitionSpeed};
    fill: ${({ theme }) => theme.textColor};
  }

  span {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    // left: -999px;
    transition: ease ${({ theme }) => theme.speed};
  }

  ${(props) =>
    props.open &&
    css`
      & svg {
        margin-left: 11rem;
        transform: rotate(-180deg);
      }
    `}

  // ${SNavBar}:hover & svg {
  //   margin-left: 11rem;
  //   transform: rotate(-180deg);
  // }

  @media (min-width: 600px) {
    ${(props) =>
      props.open &&
      css`
        & span {
          // left: 0px;
          opacity: 1;
          visibility: visible;
          // display: inline;
          transition: ease ${({ theme }) => theme.speed};
        }
      `}

    // ${SNavBar}:hover & span {
    //   // left: 0px;
    //   opacity: 1;
    //   visibility: visible;
    //   // display: inline;
    //   transition: ease ${({ theme }) => theme.speed};
    // }

   
    ${(props) =>
      props.open &&
      css`
        & svg {
          margin-left: 11rem !important;
        }
      `}

    // ${SNavBar}:hover & svg {
    //   margin-left: 11rem;
    // }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SNavBarItem = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`;

export const SNavBarLink = styled(Link)<any>`
  display: flex;
  align-items: center;
  height: 4rem;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: ${transitionSpeed};

  &:hover {
    filter: grayscale(0%) opacity(1);
    background: ${({ theme }) => theme.navHoverColor};
    color: ${({ theme }) => theme.textColor};
  }

  span {
    opacity: 0;
    visibility: hidden;
    margin-left: 1rem;
    transition: 300ms;
  }

  svg {
    width: 1rem;
    min-width: 1rem;
    margin: 0 1.3rem;
    fill: ${({ theme }) => theme.textColor};
  }

  @media (min-width: 600px) {
    ${(props) =>
      props.open &&
      css`
        & span {
          opacity: 1;
          visibility: visible;
          transition: 100ms;
          transition-delay: 300ms;
        }
      `}
    // ${SNavBar}:hover & span {
    //   opacity: 1;
    //   visibility: visible;
    //   transition: 100ms;
    //   transition-delay: 300ms;
    // }
  }

  @media (max-width: 600px) {
    justify-content: center;

    span {
      display: none;
    }
  }
`;
