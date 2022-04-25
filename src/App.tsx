import React, { useState } from 'react';

import { ActionBar, AddNewRecordModal, DetailsModal, Header, Item, Table } from './components';
import { Container } from './styles';

export const App = () => {
  const isDetailsModalOpen = false;
  const [isAddNewDetailsModalOpen, setIsAddNewDetailsModalOpen] = useState<boolean>(true);

  const [products, setProducts] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setProducts(products => [...products, newItem]);
    setIsAddNewDetailsModalOpen(false);
  }

  return (
    <Container id="main-container">
      <ActionBar onOpen={() => setIsAddNewDetailsModalOpen(true)}/>
      <Header />
      {isAddNewDetailsModalOpen && <AddNewRecordModal onAdd={addItem}/>}
    </Container>
  );
}
