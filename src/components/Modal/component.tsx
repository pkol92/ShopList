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

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center'>
      {children}
    </div>
  );
};
