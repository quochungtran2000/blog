import styled from "styled-components";
import { Color } from "../../styles/color";

export const About = styled.div`
  width: 100%;
  padding: 78px 0px;
  /* background-color: #191919; */
`;

export const Main = styled.div`
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 150px;
  img {
    height: 500px;
    width: 420px;
    border-radius: 5px;
  }
`;

export const AboutText = styled.div`
  width: 550px;
  h1 {
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.TitleAbout};
  }
  h5 {
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
  }
  span {
    color: ${Color.WILDWATERMELON};
  }
  p {
    color: ${({ theme }) => theme.textColor1};
    letter-spacing: px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;
