import React, { FC, useContext } from 'react';
import itemContext from '../../context/item-context';
import { Record } from '../Record';
import { StyledTable } from './styles';

export const Table: FC = () => {
  const contex = useContext(itemContext);

  return (
    <StyledTable>
      {contex.products.map((el)=> 
      <ul>
        <li key={el.id}>{el.name}</li>
        <li key={el.id}>{el.price}</li>
      </ul>)}
        Task #3.1
        Task #9
        <tbody>
         <Record />
        </tbody>
    </StyledTable> 
  )
}
    