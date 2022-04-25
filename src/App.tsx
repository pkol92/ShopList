import React, { useState } from 'react';

import { ActionBar, AddNewRecordModal, DetailsModal, Header, Item, Table } from './components';
import { Container } from './styles';

export const App = () => {
  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = true;

  const [products, setProducts] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setProducts(products => [...products, newItem]);
  }

  return (
    <Container id="main-container">
      <ActionBar />
      <AddNewRecordModal onAdd={addItem}/>
    </Container>
  );
}
