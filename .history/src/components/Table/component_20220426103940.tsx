import React, { FC, useContext } from 'react';
import itemContext from '../../context/item-context';
import { Record } from '../Record';
import { StyledTable } from './styles';

export const Table: FC = () => {
  const contex = useContext(itemContext);

  return (
    <StyledTable>
      {contex.products.map((el)=> el.name)}
        Task #3.1
        Task #9
        <tbody>
         <Record />
        </tbody>
    </StyledTable> 
  )
}
    