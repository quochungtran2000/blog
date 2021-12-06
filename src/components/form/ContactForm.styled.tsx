import styled, { css } from "styled-components";
import { Color } from "../../styles/color";

export const BodyCard = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 0 40px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgb(190 182 182 / 90%);
  text-align: center;
  transition: 1.5 ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgb(190 182 182 / 70%);
  }
  a {
    text-decoration: none;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  img {
    max-width: 100%;
    grid-area: image;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
  }
`;
export const CardText = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: ${Color.WATERMELON};
    font-size: 13px;
  }
  p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
  }
  h2 {
    margin-top: 0px;
    font-size: 28px;
    color: ${({ theme }) => theme.TitleContact};
  }
`;

export const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-grid-template-rows: 1fr;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${Color.WILDWATERMELON};
  border-right: 1px solid #000;
  border-left: 1px solid #000;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: #1976d2;
  :nth-child(1) {
    border-right: 1px solid #000;
  }
  :nth-child(2) {
    border-right: 1px solid #000;
  }
`;

export const Value = styled.div`
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Type = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
