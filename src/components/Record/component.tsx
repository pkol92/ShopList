import React, { FC } from "react";
import { Item } from "../AddNewRecordModal";
import { StyledRecord } from "./styles";
import { ActionBarButton } from "../ActionBar/styles";

interface RecordProps {
  product: Item;
  onItemSelect: (item: Item) => void;
}

export const Record: FC<RecordProps> = ({ product, onItemSelect }) => {
  const { name, description, price } = product;

  return (
    <StyledRecord>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td className="detail-button">
        <ActionBarButton>
          <button onClick={e => onItemSelect(product)}>More</button>
        </ActionBarButton>
      </td>
      <td className="detail-button">
        <ActionBarButton>
          <button>Delete</button>
        </ActionBarButton>
      </td>
    </StyledRecord>
  );
};
