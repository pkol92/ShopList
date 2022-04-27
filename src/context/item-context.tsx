import React from 'react';
import {createContext} from 'react';

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ItemContextInterface {
  items: Item[];
  addItem: (item: Item[]) => void;
  showNewItem: (visible: boolean) => void;
  isAddNewDetailsModalOpen: boolean;
}

// // export default React.createContext({
// //   items: []
// // });

// const iitems = [
//   { id: 'p1', name: 'tomato', price: 0.99, description: 'nice tomato' },
//   { id: 'p2', name: 'pickle', price: 1.99, description: 'some pickle' },
//   { id: 'p3', name: 'orange', price: 3.99, description: 'super food'},
// ]

const ItemContext = createContext<ItemContextInterface>({
  items : [],
  addItem: (item)=> {},
  showNewItem: (visible) => {},
  isAddNewDetailsModalOpen: false
});

export default ItemContext;