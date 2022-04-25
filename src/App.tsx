import React, { useState } from "react";
import { IterationStatement } from "typescript";

import { ActionBar, DetailsModal, Header, Table } from "./components";
import { Container } from "./styles";

export interface ShopItem {
  name: string;
  description: string;
  price: number;
  weight: number;
}

export const App = () => {
  const [items, setItems] = useState<ShopItem[]>([{name: 'pen', price: 2, weight: 3, description: 'trolo'}]);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAddNewDetailsModalOpen, setIsAddNewDetailsModalOpen] =
    useState(false);

  function isOpen () {
    setIsDetailsModalOpen(!isDetailsModalOpen)
  }

  function closeDetailPage() {
    setIsDetailsModalOpen(false)
  }

  return (
    <Container id="main-container">
      <Header />
      <ActionBar
        items={items}
        setItems={setItems}
        isAddNewDetailsModalOpen={isAddNewDetailsModalOpen}
        setIsAddNewDetailsModalOpen={setIsAddNewDetailsModalOpen}
      />
      <Table items={items} isOpen={isOpen}/>
      {/* {isDetailsModalOpen && <DetailsModal />}
      {isAddNewDetailsModalOpen && <DetailsModal closeDetailPage={closeDetailPage} name='123' id={1} description='123' weight={4} price={6}  />} */}
    </Container>
  );
};
