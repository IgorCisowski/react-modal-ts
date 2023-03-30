import React from "react";
import styled from "styled-components";
import { Other } from "../types/type";

const Content = styled.div<Other>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ darkMode }) => (darkMode ? "white" : "rgb(64 71 86)")};
  flex-grow: 1;
`;

const FirstPara = styled.p`
  font-size: 26px;
`;

const SecondPara = styled.p`
  font-size: 26px;
`;

const H2 = styled.h2<Other>`
  font-size: 42px;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const ModalContent = ({ darkMode }: any) => {
  return (
    <Content darkMode={darkMode}>
      <FirstPara>Get your</FirstPara>
      <H2 darkMode={darkMode}>£20 CREDIT</H2>
      <SecondPara>For your first course</SecondPara>
    </Content>
  );
};
