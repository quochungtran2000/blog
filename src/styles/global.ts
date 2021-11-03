import { createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

type Props = {
  theme: typeof lightTheme| typeof darkTheme
}

export const GlobalStyles = createGlobalStyle<Props>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({theme}) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
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
  
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
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