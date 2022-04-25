import React, { FC, ReactNode } from 'react';

import { Modal } from '../Modal';
import { Container } from './styles';

interface Props {
  name: string;
  price: number;
  description: string;
  weight: number;
  id: number;
  closeDetailPage: () => void
  
}

export const DetailsModal: FC<Props> = ({children, name, price, description, weight, id, closeDetailPage}) => {
 
  return (
    <Modal>
      <Container>
        <h1>Name: {name}</h1>
        <h3>Id: {id}</h3>
        <h3>Price: {price}$</h3>
        <h3>Description: {description}</h3>
        <h3>Weight: {weight} pounds</h3>
        <button onClick={()=>{closeDetailPage()}}>Back</button>
      </Container>
      
    </Modal> 
  )
}
    