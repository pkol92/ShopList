import React, { useEffect } from 'react';

import { useContext } from 'react';
import { ActionBar, DetailsModal, Header, Table, AddNewRecordModal } from './components';
import GlobalState from './context/GlobalState';
import { Container } from './styles';
import ItemContext from './context/item-context';

export const App = () => {
  const context = useContext(ItemContext);

  const isDetailsModalOpen = false;

  const isAddNewDetailsModalOpen = true;

  return (
    <GlobalState>
      <Container id="main-container">
      <Header />
      <ActionBar />
      <Table />
      {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <AddNewRecordModal />}
      </Container>
    </GlobalState>
  );
}
