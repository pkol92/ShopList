import React, { FC, useState } from "react";
import { ActionBarContainer } from "./styles";
import { AddNewRecordModal } from "../AddNewRecordModal";

export const ActionBar: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ActionBarContainer>
      {/* Task #1 */}
      <button onClick={() => setModalOpen(true)}>Add new item</button>
      {/* <AddNewRecordModal /> */}
    </ActionBarContainer>
  );
};
