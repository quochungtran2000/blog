import { Link } from "react-router-dom";
import styled from "styled-components";

export const SRelativePostCard = styled.article<any>`
  margin-bottom: 25px;
  display: flex;
  &::before {
    flex-shrink: 0;
    content:"0" ${(props) => props.count ? `"${props.count}"` : "8"};
    counter-increment: popular-count;
    width: 45px;
    font-weight: 700;
    font-size: 22px;
    font-family: Poppins, sans-serif;
    color: ${({ theme }) => theme.textColor};
    opacity: 0.7;
  }
`;

export const SRelativePostCardContent = styled.div<any>`
  flex-grow: 1;
  width: calc(100% - 45px);
`;

export const SRelativePostCardTitle = styled.h4<any>`
  font-size: 95%;
  margin: 0;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  color: ${({ theme }) => theme.textColor};
`;

export const SRelativePostCardLink = styled(Link)<any>`
  -webkit-line-clamp: 2;
  color: ${({ theme }) => theme.textColor};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-decoration: none;
`;

export const SRelativePostCardHeader = styled.div<any>`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
  font-size: 75%;
  color: ${({ theme }) => theme.textColor};
`;

export const SRelativePostCardInfo = styled.div<any>`
  width: calc(100% - 55px);
`;

export const SRelativePostCardLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: inherit;
  line-height: 1.58em;
  display: flex;

  & > a:not(:last-child):after {
    content: ",";
    margin-right: 3px;
  }
`;

export const SRelativePostCardLabelLink = styled(Link)<any>`
  color: inherit;
  display: inline;
`;

export const SRelativePostCardTime = styled.div<any>`
  font-size: 75%;
  color: ${({ theme }) => theme.textColor};
`;
