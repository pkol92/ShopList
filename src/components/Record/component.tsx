import React, { FC } from 'react';
import { Item } from '../AddNewRecordModal';
import { StyledRecord } from './styles';

interface RecordProps {
  product: Item
}

export const Record: FC<RecordProps> = ({product}) => {
  const {name, description, price} = product;

  return (
    <StyledRecord>
        {name}
        {description}
        {price}
    </StyledRecord> 
  )
}
    