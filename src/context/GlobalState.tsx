import React, { useState } from 'react';
import  ItemContext  from './item-context';
import {Item} from './item-context'

const GlobalState = (props: { children: any; }) => {
  const initialProducts= [
    { id: 1, name: 'tomato', price: 0.99, description: 'nice tomato' },
    { id: 2, name: 'pickle', price: 1.99, description: 'some pickle' },
    { id: 3, name: 'orange', price: 3.99, description: 'super food'},
  ];

  const [items, setItems] = useState(initialProducts);
//   const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addItem = (item: Item[]) => {
    setTimeout(() => {
      return setItems(item);
    }, 700);
  };

  const [isAddNewDetailsModalOpen, setIsAddNewDetailsModalOpen] = useState(false);

  const showNewItem = (visible: boolean) => {
    setIsAddNewDetailsModalOpen(visible);
  }

//   const removeProductFromCart = productId => {
//     setTimeout(() => {
//       // setCart(updatedCart);
//     }, 700);
//   };

  return (
    <ItemContext.Provider
      value={{
        items: items, 
        addItem: addItem,
        showNewItem: showNewItem,
        isNewItemOpen: isAddNewDetailsModalOpen,
      }
        
        // addProductToCart: addProductToCart,
        // removeProductFromCart: removeProductFromCart
      }
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default GlobalState;