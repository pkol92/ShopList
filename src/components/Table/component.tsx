import React, { FC } from 'react';
import { Item } from '../AddNewRecordModal/component';
import { Record } from '../Record';
import { StyledTable } from './styles';

interface TableProps {
  products: Item[]
}

export const Table: FC<TableProps> = ({products}) => {
  return (
    <StyledTable>
        <span className='font-bold text-4xl'>Products:</span>
        <tbody>
          {products.map(product => <Record product={product} />)}
        </tbody>
    </StyledTable> 
  )
}
    