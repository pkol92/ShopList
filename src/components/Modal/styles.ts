import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  z-index: 100;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }
`;