import React, { useState } from "react";

import { ActionBar, DetailsModal, Header, Table } from "./components";
import { Container } from "./styles";

interface ShopItem {
  name: string;
  description: string;
  price: number;
  weight: number;
}

export const App = () => {
  const [items, setItems] = useState<ShopItem[]>([]);
  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = false;

  return (
    <Container id="main-container">
      <Header />
      <ActionBar />
      <Table />
      {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <DetailsModal />}
    </Container>
  );
};
