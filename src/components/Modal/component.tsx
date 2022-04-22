import ReactDom from 'react-dom';
import React, { FC, useEffect } from 'react';
import { RenderType } from '../../common/types';

import { Container, Overlay } from './styles';
interface Props {
  children: RenderType;
}

export const Modal: FC<Props> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDom.createPortal(
    <Container>
      <Overlay>{children}</Overlay>
    </Container>,
    document.getElementById('main-container') as HTMLElement
  );
};
