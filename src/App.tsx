import React from 'react';

import { ActionBar, DetailsModal, Header, Table } from './components';
import { Container } from './styles';

export const App = () => {
  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = false;
  return (
    <Container id="main-container">
      <Header />
      <ActionBar />
      <Table />
      {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <DetailsModal />}
      <span className="text-3xl">Przyklad dzialania talwinda</span>
    </Container>
  );
}
