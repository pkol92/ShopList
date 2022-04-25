import React, { FC } from "react";
import { Item } from "../AddNewRecordModal/component";
import { Record } from "../Record";
import { StyledTable } from "./styles";

interface TableProps {
  products: Item[],
  onItemSelect: (item: Item) => void,
  onItemDelete: (item: Item) => void,
}

export const Table: FC<TableProps> = ({products, onItemSelect, onItemDelete}) => {
  return (
    <StyledTable>
      <span className="font-bold text-4xl mt-4">Products:</span>
      <table className="my-6">
        <tbody>
        <tr>
            <th>Name</th>
            <th className="hidden sm:visible">Description</th>
            <th className="hidden sm:visible">Price</th>
            <th></th>
            <th></th>
          </tr>
          {products.map(product => <Record product={product} onItemSelect={onItemSelect} onItemDelete={onItemDelete}/>)}
        </tbody>
      </table>
    </StyledTable>
  );
};
