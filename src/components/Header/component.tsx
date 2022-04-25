import React, { FC } from 'react';
import { StyledHeader, StyledLogo } from './styles';
import logo from './logo.png'


export const Header: FC = () => {
  return (
    <StyledHeader>
        <nav>
          <StyledLogo>
          <img className='logo' src={logo} alt={'logo'} />
          </StyledLogo>
        </nav>
    </StyledHeader> 
  )
}
    