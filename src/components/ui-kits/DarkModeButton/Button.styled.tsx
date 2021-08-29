import styled from 'styled-components'

export const DarkModeButtonS = styled.i<any>`
  display: flex;
  align-items: center;
  width: 33px;
  height: 18px;
  margin-left: 8px;
  border-radius: 10px;
  border: 1px solid #48525c;

  &::before {
    content: '';
    display: block;
    position: relative;
    left: ${props => props.isLight ? '3px' : '17px' };
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #48525c;
    -webkit-transition: all .1s ease;
    transition: all .2s ease;
  }
`