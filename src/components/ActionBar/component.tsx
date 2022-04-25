import React, { FC } from "react";
import { ActionBarContainer, Button } from "./styles";

export const ActionBar: FC = () => {
  return (
    <ActionBarContainer>
      <Button>Add Item</Button>
    </ActionBarContainer>
  );
};
