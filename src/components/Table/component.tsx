import React, { FC } from "react";
import { Item } from "../AddNewRecordModal/component";
import { Record } from "../Record";
import { StyledTable } from "./styles";

interface TableProps {
  products: Item[],
  onItemSelect: (item: Item) => void,
}

export const Table: FC<TableProps> = ({products, onItemSelect}) => {
  return (
    <StyledTable>
      <span className="font-bold text-4xl">Products:</span>
      <table>
        <tbody>
          {products.map(product => <Record product={product} onItemSelect={onItemSelect}/>)}
        </tbody>
      </table>
    </StyledTable>
  );
};
