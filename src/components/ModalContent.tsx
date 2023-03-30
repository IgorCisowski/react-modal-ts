import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  flex-grow: 1;
`;

const FirstPara = styled.p`
  font-size: 26px;
`;

const SecondPara = styled.p`
  font-size: 26px;
`;

const H2 = styled.h2`
  font-size: 42px;
`;

export const ModalContent = () => {
  return (
    <Content>
      <FirstPara>Get your</FirstPara>
      <H2>$20 CREDIT</H2>
      <SecondPara>For your first course</SecondPara>
    </Content>
  );
};
