import React, { FC } from 'react';
import { ActionBarContainer } from './styles';

interface ActionBarProps {
  onOpen: () => void
}

export const ActionBar: FC<ActionBarProps> = ({onOpen}) => {

  return (
    <ActionBarContainer>
        <button onClick={onOpen}>Create</button>
    </ActionBarContainer> 
  )
}
    