import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SPostCard = styled.article<any>`
  display: block;
  background-color: ${({ theme }) => theme.headerColor};
  margin: 0 0 20px;
  padding: 10px 10px 15px;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(30 30 30 / 7%);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const SPostCardThumb = styled.div<any>`
  margin-bottom: 15px;

  & a {
    position: relative;
    display: block;
    width: 100%;
    padding-top: 52.5%;
    background-color: ${({ theme }) => theme.headerColor};
    border-radius: 6px;
    overflow: hidden;
    & img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: none;
      max-height: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;

export const SPostCardContent = styled.div<any>`
  height: 100%;
`;
export const SPostCardHeadLine = styled.div<any>`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const SPostCardLable = styled.div<any>`
  font-size: 11px;
  line-height: 1.58em;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SPostCardTitle = styled.h2<any>`
  font-size: 92%;
  line-height: 1.62em;
  flex:1;

  & a {
    color: inherit;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const SPostCardInfo = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
  font-size: 75%;
  color: #48525c;
`;

export const SPostCardHeader = styled.div<any>`
  width: calc(100% - 55px);
`;

export const SPostCardAuthor = styled.div<any>`
  color: ${({ theme }) => theme.textColor};
`;

export const SPostCardTime = styled.div<any>`
  color: ${({ theme }) => theme.textColor};
`;

export const SPostCardLink = styled(Link)<any>`
  color: ${({ theme }) => theme.textColor};
  text-decoration: ${(props) => (props.underline === true ? "underline" : "none")};
  transition: 100ms linear !important;
  transition-delay: 0ms !important;

  ${(props) =>
    props.author &&
    css`
      font-size: 120%;
      font-weight: 600;
    `}
`;
