import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  height: 30%;
`;

const YesButton = styled.button`
  cursor: pointer;
  background-color: rgb(8, 126, 164);
  color: white;
  border: none;
  padding: 0.75em 1.5em;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 17px;
`;

const NoButton = styled.button`
  cursor: pointer;
  background-color: #23272f;
  color: white;
  border: none;
  padding: 0.75em 1.5em;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 17px;
  border: 1px solid #404756;
`;

export const ModalButtons = ({ handleOpen }: any) => {
  return (
    <ButtonWrapper>
      <YesButton onClick={() => handleOpen()}>YES</YesButton>
      <NoButton onClick={() => handleOpen()}>NO</NoButton>
    </ButtonWrapper>
  );
};
