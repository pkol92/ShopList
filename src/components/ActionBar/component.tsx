import React, { FC, useState } from "react";
import { ActionBarContainer, Button } from "./styles";
import { DetailsModal } from "../DetailsModal";

export const ActionBar: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <ActionBarContainer>
      <Button onClick={() => setShow(!show)}>Add Item</Button>
      {show && <DetailsModal setShow={setShow} />}
    </ActionBarContainer>
  );
};
