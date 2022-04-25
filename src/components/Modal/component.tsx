import ReactDom from 'react-dom';
import React, { FC, useEffect, useRef } from 'react';
import { RenderType } from '../../common/types';

import { Container, Overlay } from './styles';
interface Props {
  children: RenderType;
  onBackgroundClick: () => void
}

export const Modal: FC<Props> = ({ children, onBackgroundClick }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onBackground = (event: any) => {
    if (event.target !== backgroundRef.current) return;
    onBackgroundClick()
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center' onClick={onBackground} ref={backgroundRef}>
      {children}
    </div>
  );
};
