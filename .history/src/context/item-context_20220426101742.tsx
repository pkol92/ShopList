import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', name: 'tomato', price: 0.99 },
    { id: 'p2', name: 'pickle', price: 1.99 },
    { id: 'p3', name: 'orange', price: 3.99 },
  ],
  items: [],

});