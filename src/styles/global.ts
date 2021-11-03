import { createGlobalStyle } from "styled-components";
import { ITheme } from "./theme";

type Props = {
  theme: ITheme;
};

export const GlobalStyles = createGlobalStyle<Props>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    height: 100vh;
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;

    #root {
      height: 100vh;
    }
  }

  body::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  body::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
  
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;
