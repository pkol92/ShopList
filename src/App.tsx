import React from 'react';

import { ActionBar, DetailsModal, Header, Table } from './components';
import { Container } from './styles';
// import AddItem from './components/AddItem/AddItem';
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
      {/* <AddItem/> */}
    </Container>
  );
}
