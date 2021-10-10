import styled, { css } from "styled-components";

export const SSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: calc(60px + 15px) 0 0 0;
  transition: 0.2s linear;
  z-index: 2;
  background-color: ${({ theme }) => theme.headerColor};
  width: 250px;
`;

export const SNavDesktop = styled.ul<any>`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font90};

  & > li:hover {
    // background: red;
  }
`;

export const SNavDesktopItem = styled.li<any>`
  padding: 10px 20px 10px 25px;
  position: relative;
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  &:before {
    content: "";
    position: absolute;
    background: red;
    top: -1px;
    left: 0;
    display: block;
    width: 2px;
    height: 42px;
    border-radius: 0 3px 3px 0;
    opacity: 0;
    transition: 0.3s linear;
  }

  &:hover:before {
    opacity: 1;
  }

  ${(props) =>
    props.break &&
    css`
      &:after {
        content: "";
        display: block;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.text};
        opacity: 0.3;
        margin-top: 20px;
      }
    `}

  ${(props) =>
    props.social &&
    css`
      display: flex;
      position: fixed;
      bottom: 0px;
      left: 0;
      width: 250px;
      padding: 20px 20px 35px 20px;
    `}
`;

export const SNavDesktopSocial = styled.li`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 250px;
  padding: 20px;
  justify-content: flex-start;

  & a svg {
    height: 25px;
    padding: 2px;
    margin: 4px;
    fill: ${({ theme }) => theme.text};
    border: 1px solid #d7d7d7;
  }

  &:before {
    content: "";
    position: absolute;
    background: red;
    top: 13px;
    left: 0;
    display: block;
    width: 2px;
    height: 42px;
    border-radius: 0 3px 3px 0;
    opacity: 0;
    transition: 0.3s linear;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const SNavItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  span {
    flex-grow: 1;
  }
  svg {
    // width: 15px;
    height: 20px;
    fill: ${({ theme }) => theme.text};
    margin-right: 20px;
  }
`;

export const SNavTiemLabel = styled.label<any>`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  translation: 0.3s linear;
  svg {
    // width: 15px;
    height: 20px;
    fill: ${({ theme }) => theme.text};
    margin-right: 20px;
  }
  span {
    flex-grow: 1;
  }
  & svg:last-child {
    height: 15px;
    transition: 0.3s linear;
    margin-right: 0;
    ${(props) =>
      props.open &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const SNavSubMenuItemLink = styled.li`
  padding: 17px 20px 10px 25px;
  position: relative;
  span {
    font-weight: normal;
  }
  transition: 0.3s linear;
`;

export const SNavItemSubMenu = styled(SNavDesktop)`
  padding-left: 1rem;
  font-weight: none;
  overflow: hidden;
  height: 0;
  transition: 0.3s ease-out;
  transform: translateX(-110%);
  ${SNavDesktopItem} {
    font-weight: normal !important;
    padding: 17px 20px 10px 25px;
    background: none !important;
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0%);
      height: auto;
      transition: 0.3s ease-out; ;
    `}
`;

export const SNavMobile = styled.ul``;

export const SNavMobileItem = styled.li``;
