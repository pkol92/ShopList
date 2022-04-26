import React from 'react';

import { ActionBar, DetailsModal, Header, Table } from './components';
import GlobalState from './context/GlobalState';
import { Container } from './styles';

export const App = () => {

  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = false;
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
