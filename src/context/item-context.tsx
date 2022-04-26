import React from 'react';
import {createContext} from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
}

// export default React.createContext({
//   items: []
// });

const items: Item[] = [
  // { id: 'p1', name: 'tomato', price: 0.99, description: 'nice tomato' },
  // { id: 'p2', name: 'pickle', price: 1.99, description: 'some pickle' },
  // { id: 'p3', name: 'orange', price: 3.99, description: 'super food'},
]

const ItemContext = createContext(items);

export default ItemContext;