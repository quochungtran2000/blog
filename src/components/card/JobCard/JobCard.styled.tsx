import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SPopularCard = styled.article<any>`
  // margin-bottom: 25px;
  display: flex;
  &::before {
    flex-shrink: 0;
    // content:${(props) => `"${'00'.concat(props.count).slice(-2)}"`};
    content: '';
    counter-increment: popular-count;
    background-image: url('https://www.kindpng.com/picc/m/38-380040_dxc-technology-logo-png-transparent-png.png');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    width: 45px;
    height: 45px;
    font-weight: 700;
    font-size: 22px;
    font-family: Poppins, sans-serif;
    color: ${({ theme }) => theme.textColor};
    opacity: 0.7;
    margin-right: 0.5rem;
  }
`;

export const SPopularCardContent = styled.div<any>`
  flex-grow: 1;
  width: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SPopularCardTitle = styled.h4<any>`
  font-size: 95%;
  margin: 0;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  color: ${({ theme }) => theme.textColor};
`;

export const SPopularCardLink = styled(Link)<any>`
  -webkit-line-clamp: 2;
  color: ${({ theme }) => theme.textColor};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-decoration: none;
`;

export const SPopularCardHeader = styled.div<any>`
  // margin-top: 5px;
  display: flex;
  // justify-content: space-between;
  align-items: flex-end;
  // margin-top: 12px;
  font-size: 75%;
  color: ${({ theme }) => theme.textColor};
`;

export const SPopularCardInfo = styled.div<any>`
  // width: calc(100% - 55px);
`;

export const SPopularCardLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: inherit;
  line-height: 1.58em;
  display: flex;

  & > a:not(:last-child):after {
    content: ',';
    margin-right: 3px;
  }
`;

export const SPopularCardLabelLink = styled(Link)<any>`
  color: inherit;
  display: inline;
`;

export const SPopularCardTime = styled.div<any>`
  font-size: 75%;
  color: ${({ theme }) => theme.textColor};
`;

export const SJobInfoAuthor = styled.div<any>`
  font-size: inherit;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-right: 18px;
  flex-shrink: 0;
  line-height: 1.58em;
  display: flex;
`;

export const SJobInfoAuthorName = styled.span<any>`
  max-width: 120px;
  &::before {
    content: 'Author';
    font-weight: 400;
    font-family: 'Nunito Sans', sans-serif;
    display: block;
    margin-bottom: 2px;
    margin-right: 0.5rem;
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
    content: '${(props) => props.author}';
  }
`;

export const SJobInfoPostTime = styled(SJobInfoAuthor)``;
export const SJobInfoPostAt = styled(SJobInfoAuthorName)`
  &::before {
    content: 'Post at';
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
    content: '${(props) => props.time}';
  }
`;

export const SJobEntry = styled.div<any>``;
export const SJobBody = styled.div<any>`
  & img {
    max-width: 100%;
  }

  & ul {
    margin: 1rem 0 0 1rem;
  }
`;

export const SJobComment = styled.div<any>``;
export const SJobCommentWidger = styled.div<any>`
  margin: 2rem 0;

  &::before {
    content: 'Comment';
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
    content: '${(props) => props.title}';
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
    content: '${(props) => props.value}';
  }
`;
