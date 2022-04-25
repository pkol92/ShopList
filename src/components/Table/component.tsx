import React, { FC } from 'react';
import { Record } from '../Record';
import { StyledTable } from './styles';
import { ShopItem } from '../../App'

interface Table {
  items: ShopItem[],
  isOpen: () => void
}

export const Table: FC<Table> = ( {items} ) => {
  return (
    <StyledTable>
        {items.map((el) => 
        <ul>
          <li>{el.name}</li>
          <li>{el.price}</li>
        </ul>)}
        {/* <tbody>
         <Record />
        </tbody> */}
    </StyledTable> 
  )
}
    