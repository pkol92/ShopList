import React, { useState } from 'react';
import  ItemContext  from './item-context';

const GlobalState = (props: { children: any; }) => {
    const products = [
        { id: 'p1', name: 'tomato', price: 0.99, description: 'nice tomato' },
        { id: 'p2', name: 'pickle', price: 1.99, description: 'some pickle' },
        { id: 'p3', name: 'orange', price: 3.99, description: 'super food'},
      ]

    const [items, setItems] = useState([]);
//   const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

//   const addProductToCart = product => {
//     setTimeout(() => {
//       // setCart(updatedCart);
//     }, 700);
//   };

//   const removeProductFromCart = productId => {
//     setTimeout(() => {
//       // setCart(updatedCart);
//     }, 700);
//   };

  return (
    <ItemContext.Provider
      value={{
        products: products,
        items: items,
        // addProductToCart: addProductToCart,
        // removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default GlobalState;