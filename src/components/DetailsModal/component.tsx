import React, { FC } from "react";

import { Modal } from "../Modal";
import { Container } from "./styles";
import AddItem from "../AddItem/AddItem";

export const DetailsModal: FC = () => {
  return (
    <Modal>
      <Container>
        <AddItem />
      </Container>
    </Modal>
  );
};
