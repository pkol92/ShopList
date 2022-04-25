import React, { FC } from "react";
import { StyledHeader, Logo, WidthWrapper } from "./styles";
import { ActionBar } from "../ActionBar";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <WidthWrapper>
        <Logo>Listownik</Logo>
        <ActionBar />
      </WidthWrapper>
    </StyledHeader>
  );
};
