import React, { FC } from "react";
import { Item } from "../AddNewRecordModal";
import { StyledRecord } from "./styles";
import { ActionBarButton } from "../ActionBar/styles";

interface RecordProps {
  product: Item;
  onItemSelect: (item: Item) => void,
  onItemDelete: (item: Item) => void,
}

export const Record: FC<RecordProps> = ({ product, onItemSelect, onItemDelete }) => {
  const { name, description, price } = product;

  return (
    <StyledRecord>
      <td>{name}</td>
      <td className="hidden sm:visible">{description}</td>
      <td className="hidden sm:visible">{price}</td>
      <td className="detail-button">
        <ActionBarButton>
          <button onClick={e => onItemSelect(product)}>More</button>
        </ActionBarButton>
      </td>
      <td className="detail-button">
        <ActionBarButton>
          <button onClick={e => onItemDelete(product)}>Delete</button>
        </ActionBarButton>
      </td>
    </StyledRecord>
  );
};
