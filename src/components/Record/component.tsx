import React, { FC } from 'react';
import { Item } from '../AddNewRecordModal';
import { StyledRecord } from './styles';

interface RecordProps {
  product: Item,
  onItemSelect: (item: Item) => void,
}

export const Record: FC<RecordProps> = ({product, onItemSelect}) => {
  const {name, description, price} = product;

  return (
    <StyledRecord>
        {name}
        {description}
        {price}
    </StyledRecord> 
  )
}
    