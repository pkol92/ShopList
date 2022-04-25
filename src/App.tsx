import React, { useState } from 'react';

import { ActionBar, AddNewRecordModal, DetailsModal, Header, Item, Table } from './components';
import { Container } from './styles';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isAddNewDetailsModalOpen, setIsAddNewDetailsModalOpen] = useState<boolean>(false);

  const [products, setProducts] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setProducts(products => [...products, newItem]);
    setIsAddNewDetailsModalOpen(false);
    changeSelectedItem(newItem);
  }

  const changeSelectedItem = (item: Item) => {
    setSelectedItem(item);
  }

  const closeModals = () => {
    setSelectedItem(null);
    setIsAddNewDetailsModalOpen(false);
  }

  return (
    <Container id="main-container">
      <div className='header-container'>
      <Header />
      <ActionBar onOpen={() => setIsAddNewDetailsModalOpen(true)}/>
      </div>
      <Table products={products} onItemSelect={changeSelectedItem}/>
      {isAddNewDetailsModalOpen && <AddNewRecordModal onAdd={addItem} onBackgroundClick={closeModals}/>}
      {selectedItem && <DetailsModal product={selectedItem} onBackgroundClick={closeModals}/>}
    </Container>
  );
}
