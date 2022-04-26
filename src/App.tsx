import React from 'react';

import { useContext } from 'react';
import { ActionBar, DetailsModal, Header, Table } from './components';
import GlobalState from './context/GlobalState';
import { Container } from './styles';
import ItemContext from './context/item-context';

export const App = () => {
  const context = useContext(ItemContext);

  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = context.isNewItemOpen;
  return (
    <GlobalState>
      <Container id="main-container">
      <Header />
      <ActionBar />
      <Table />
      {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <DetailsModal />}
      </Container>
    </GlobalState>
    
  );
}
