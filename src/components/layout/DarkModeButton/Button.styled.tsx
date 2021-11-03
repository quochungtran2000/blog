import styled from 'styled-components'
import { transitionSpeed } from '../../../application.constant'

export const DarkModeButtonS = styled.i<any>`
  display: flex;
  align-items: center;
  width: 33px;
  height: 18px;
  margin-left: 8px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.textColor};

  &::before {
    content: '';
    display: block;
    position: relative;
    left: ${props => props.isLight ? '3px' : '17px' };
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.textColor};
    -webkit-transition: all .1s ease;
    transition: all ${transitionSpeed} ease;
  }
`