import React, { FC } from 'react';
import { Item } from '../AddNewRecordModal';

import { Modal } from '../Modal';
import { Container } from './styles';

interface DetailsModalProps {
  product: Item,
  onBackgroundClick: () => void
}

export const DetailsModal: FC<DetailsModalProps> = ({product, onBackgroundClick}) => {
  const {name, description, price} = product;

  return (
    <Modal onBackgroundClick={onBackgroundClick}>
      <Container className='bg-white p-2 w-full md:w-96'>
        <span className='block text-3xl font-bold'>{name}</span>
        <span className='block text-xl'>{price} $</span>
        <p className='mt-10'>
          {description}
        </p>
      </Container>
    </Modal> 
  )
}
    