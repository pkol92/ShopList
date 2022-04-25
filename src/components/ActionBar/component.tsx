import React, { FC, useState } from "react";
import { ActionBarContainer } from "./styles";
import { AddNewRecordModal } from "../AddNewRecordModal";
import { ShopItem } from "../../App";

interface ActionBarProps {
  items: ShopItem[];
  setItems: React.Dispatch<React.SetStateAction<ShopItem[]>>;
  isAddNewDetailsModalOpen?: boolean;
  setIsAddNewDetailsModalOpen?: any;
}

export const ActionBar: FC<ActionBarProps> = ({
  items,
  setItems,
  isAddNewDetailsModalOpen,
  setIsAddNewDetailsModalOpen,
}: ActionBarProps) => {
  return (
    <ActionBarContainer>
      {/* Task #1 */}
      <button onClick={() => setIsAddNewDetailsModalOpen(true)}>
        Add new item
      </button>
      {isAddNewDetailsModalOpen ? (
        <AddNewRecordModal items={items} setItems={setItems} />
      ) : (
        ""
      )}
    </ActionBarContainer>
  );
};
