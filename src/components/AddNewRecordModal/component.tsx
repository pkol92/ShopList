import React, { FC, useState, useEffect } from "react";

import { Modal } from "../Modal";
import { Container } from "./styles";
import { ShopItem } from "../../App";

interface AddNewRecordModalProps {
  items: ShopItem[];
  setItems: React.Dispatch<React.SetStateAction<ShopItem[]>>;
  isAddNewDetailsModalOpen?: boolean;
  setIsAddNewDetailsModalOpen?: any;
}

export const AddNewRecordModal: FC<AddNewRecordModalProps> = ({
  items,
  setItems,
  isAddNewDetailsModalOpen,
  setIsAddNewDetailsModalOpen,
}: AddNewRecordModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleSubmit() {
    if (name && description && price && weight) {
      setItems([...items, { name, description, price, weight }]);

      setIsAddNewDetailsModalOpen(false);
    }
  }

  // useEffect(() => {
  //   if (name && description && price && weight) {
  //     setItems([...items, { name, description, price, weight }]);
  //   }
  // }, [name, description, price, weight, items, setItems]);

  return (
    <Modal>
      <Container>
        {/* Task #2 */}
        <h4 className="form-title">Add new item</h4>

        <form className="item-form" onSubmit={handleSubmit}>
          <label className="input-label">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="input-label">
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="input-label">
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>

          <label className="input-label">
            Weight
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </label>

          <input type="submit" />
        </form>

        {/* Task #7 */}
      </Container>
    </Modal>
  );
};
