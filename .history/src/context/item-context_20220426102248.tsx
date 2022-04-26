import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', name: 'tomato', price: 0.99, description: 'nice tomato' },
    { id: 'p2', name: 'pickle', price: 1.99, description: 'some pickle' },
    { id: 'p3', name: 'orange', price: 3.99, description: 'super food'},
  ],
  items: [],

});