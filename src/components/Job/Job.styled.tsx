import styled from "styled-components";
import { Link } from "react-router-dom";

export const SJob = styled.article<any>``;

export const SJobDetail = styled.article<any>`
  display: block;
  background-color: ${({ theme }) => theme.headerColor};
  margin: 0 0 20px;
  padding: 10px 10px 15px;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(30 30 30 / 7%);s
`;

export const SJobContent = styled.div<any>`
  padding: 1rem;
`;

export const SJobHeadLine = styled.div<any>`
  margin-bottom: 1rem;
`;

export const SJobTitle = styled.h1<any>`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.3em;
  font-weight: 700;
  font-family: Poppins, sans-serif;
`;

export const SJobInfo = styled.div<any>`
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

export const SJobInfoHeader = styled.div<any>`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SJobInfoImage = styled.div<any>`
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

export const SJobInfoAuthor = styled.div<any>`
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
`;

export const SJobInfoAuthorName = styled.span<any>`
  max-width: 120px;
  &::before {
    content: "Author";
    font-weight: 400;
    font-family: "Nunito Sans", sans-serif;
    display: block;
    margin-bottom: 2px;
  }
`;

export const SJobInfoAuthorLink = styled(Link)<any>`
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

export const SJobInfoPostTime = styled(SJobInfoAuthor)``;
export const SJobInfoPostAt = styled(SJobInfoAuthorName)`
  &::before {
    content: "Post at";
  }
`;
export const SJobInfoPostAtTime = styled.time<any>`
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

export const SJobEntry = styled.div<any>``;
export const SJobBody = styled.div<any>`
  & img {
    max-width: 100%;
  };

  & ul {
    margin: 1rem 0 0 1rem;
  }
`;

export const SJobComment = styled.div<any>``;
export const SJobCommentWidger = styled.div<any>`
  margin: 2rem 0;

  &::before {
    content: "Comment";
    display: block;
    margin-bottom: 8px;
    font-size: 0.66rem;
  }
`;

export const SJobCommentWidgerContent = styled.div<any>`
  min-height: 80px;
  padding: 15px;
  border: 1px solid rgba(120, 120, 120, 0.25);
  border-radius: 3px;
`;

export const SJobImage = styled.div<any>`
  max-width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const SJobInfoLocation = styled(SJobInfoAuthor)``;

export const SJobInfoLocationTitle = styled(SJobInfoAuthorName)<any>`
  &::before {
    content: "${(props) => props.title}";
  }
`;

export const SJobInfoLocationValue = styled.span<any>`
  white-space: nowrap;
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
  text-decoration: none;
  &::before {
    content: "${(props) => props.value}";
  }
`;
export const SJobDetailLink = styled(Link)<any>``;
