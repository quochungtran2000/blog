import styled from "styled-components";
import { transitionSpeed } from "../../../application.constant";

export const SMain = styled.main`
  margin-top: 4rem;
  margin-left: 4rem;
  height: 100%;
  transition: ease ${transitionSpeed};
  padding: 1rem;

  @media (max-width: 600px){
    margin-left: 0;
  }
`;
