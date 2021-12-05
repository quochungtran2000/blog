import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
  line-height: 1.3em;
  text-align: left;
`;

export const About = styled.div`
  padding: 30px 10px 50px 40px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContentAbout = styled.div`
  img {
    width: 550px;
    height: 300px;
    font-size: 10px;
    color: transparent;
    display: inline-block;
    border-radius: 3px;
    margin-bottom: 20px;
  }
`;

export const MainRight = styled.div`
  background-color: transparent;
  width: 380px;
  padding: 30px 0 50px 30px;
  flex-shrink: 0;
`;

export const Discript = styled.p`
  line-height: 1.8em;
  font-size: 16px;
`;
