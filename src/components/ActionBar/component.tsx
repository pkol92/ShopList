import React, { FC } from 'react';
import { ActionBarContainer } from './styles';

export const ActionBar: FC = () => {

  function func(){
    
  }

  return (
    <ActionBarContainer>
        <button onClick={func}>Create</button>
    </ActionBarContainer> 
  )
}
    