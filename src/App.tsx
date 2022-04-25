import React, { useState } from "react";

import { ActionBar, DetailsModal, Header, Table } from "./components";
import { Container } from "./styles";

export interface ShopItem {
  name: string;
  description: string;
  price: number;
  weight: number;
}

export const App = () => {
  const [items, setItems] = useState<ShopItem[]>([]);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAddNewDetailsModalOpen, setIsAddNewDetailsModalOpen] =
    useState(false);

  return (
    <Container id="main-container">
      <Header />
      <ActionBar
        items={items}
        setItems={setItems}
        setIsAddNewDetailsModalOpen={setIsAddNewDetailsModalOpen}
      />
      <Table />
      {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <DetailsModal />}
    </Container>
  );
};
