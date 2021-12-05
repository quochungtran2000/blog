import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPostDetail = styled.article<any>`
  display: block;
  background-color: ${({ theme }) => theme.headerColor};
  margin: 0 0 20px;
  padding: 10px 10px 15px;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(30 30 30 / 7%);s
`;

export const SPostContent = styled.div<any>`
  padding: 1rem;
`;

export const SPostHeadLine = styled.div<any>`
  margin-bottom: 1rem;
`;

export const SPostTitle = styled.h1<any>`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.3em;
  font-weight: 700;
  font-family: Poppins, sans-serif;
`;

export const SPostInfo = styled.div<any>`
  margin-top: 30px;
  font-size: 85%;
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
  font-size: 75%;
`;

export const SPostInfoHeader = styled.div<any>`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SPostInfoImage = styled.div<any>`
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  margin-right: 18px;
  padding: 4px;
  border-radius: 50%;
  position: relative;

  & img {
    display: block;
    position: relative;
    max-width: 100%;
    font-size: 10px;
    border-radius: 50%;
  }
`;

export const SPostInfoAuthor = styled.div<any>`
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
`;

export const SPostInfoAuthorName = styled.span<any>`
  max-width: 120px;
  &::before {
    content: "author";
    font-weight: 400;
    font-family: "Nunito Sans", sans-serif;
    display: block;
    margin-bottom: 2px;
  }
`;

export const SPostInfoAuthorLink = styled(Link)<any>`
  white-space: nowrap;
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
  text-decoration: none;
  &::before {
    content: "${(props) => props.author}";
  }
`;

export const SPostInfoPostTime = styled(SPostInfoAuthor)``;
export const SPostInfoPostAt = styled(SPostInfoAuthorName)`
  &::before {
    content: "post at";
  }
`;
export const SPostInfoPostAtTime = styled.time<any>`
  white-space: nowrap;
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
  text-decoration: none;
  &::before {
    content: "${(props) => props.time}";
  }
`;

export const SPostEntry = styled.div<any>``;
export const SPostBody = styled.div<any>`
  & img {
    max-width: 100%;
  }
`;

export const SPostComment = styled.div<any>``;
export const SPostCommentWidger = styled.div<any>`
  margin: 2rem 0;

  &::before {
    content: "Comment";
    display: block;
    margin-bottom: 8px;
    font-size: 0.66rem;
  }
`;

export const SPostCommentWidgerContent = styled.div<any>`
  min-height: 80px;
  padding: 15px;
  border: 1px solid rgba(120, 120, 120, 0.25);
  border-radius: 3px;
`;

export const SPostImage = styled.div<any>`
  max-width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  & img {
    max-width: 100%;
    height: auto;
  }
`;
export const SPostDetailLink = styled(Link)<any>``;
