import React, { FC, useContext } from 'react';
import ItemContext from '../../context/item-context';
import { Record } from '../Record';
import { StyledTable } from './styles';

export const Table: FC = () => {
  const context = useContext(ItemContext);
  // const {items} = context;

  return (
    <StyledTable>
      {context.items.map((el)=> 
      <ul>
        <li key={el.id}>{el.name}</li>
        <li key={el.id}>{el.price}</li>
      </ul>)}
        Task #9
        <tbody>
         <Record />
        </tbody>
    </StyledTable> 
  )
}
    