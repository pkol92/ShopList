import React, { FC } from "react";

import { Modal } from "../Modal";
import { Container, Close } from "./styles";
import AddItem from "../AddItem/AddItem";

interface Props {
  setShow: any;
}

export const DetailsModal: FC<Props> = ({ setShow }) => {
  return (
    <Modal>
      <Container>
        <Close onClick={() => setShow(false)}>X</Close>
        <AddItem />
      </Container>
    </Modal>
  );
};
