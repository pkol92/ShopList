import React, { FC, useContext, } from 'react';
import { ActionBarContainer } from './styles';
import ItemContext from '../../context/item-context';

export const ActionBar: FC = () => {
  const context = useContext(ItemContext);

  return (
    <ActionBarContainer>
        <button onClick={()=> context.showNewItem(true)}>Add item to the list</button>
    </ActionBarContainer> 
  )
}
    