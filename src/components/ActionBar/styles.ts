import styled from "styled-components";

export const ActionBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 120px;
  border: 2px solid #3742fa;
  background-color: #3742fa;
  padding: 15px 20px;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #3742fa;
  }

  &:focus {
    outline: none;
  }
`;
