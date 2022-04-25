import React from "react";

import { DetailsModal, Header, Table } from "./components";
import { Container } from "./styles";
// import AddItem from './components/AddItem/AddItem';
export const App = () => {
  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = false;
  return (
    <Container id="main-container">
      <Header />
      <Table />
      {isDetailsModalOpen && <DetailsModal setShow={() => {}} />}
      {isAddNewDetailsModalOpen && <DetailsModal setShow={() => {}} />}
      {/* <AddItem/> */}
    </Container>
  );
};
