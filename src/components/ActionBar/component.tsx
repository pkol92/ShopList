import React, { FC } from 'react';
import { ActionBarContainer, ActionBarButton } from './styles';

interface ActionBarProps {
  onOpen: () => void
}

export const ActionBar: FC<ActionBarProps> = ({onOpen}) => {

  return (
    <ActionBarContainer>
      <ActionBarButton>
        <button onClick={onOpen}>Create</button>
        </ActionBarButton>
    </ActionBarContainer> 
  )
}
    