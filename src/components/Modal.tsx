import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ModalImg } from "./ModalImg";
import { ModalContent } from "./ModalContent";
import { ModalButtons } from "./ModalButtons";
import { DarkMode } from "./DarkMode";
import { Props } from "../types/type";
import { Other } from "../types/type";

const Wrapper = styled.div<Other>`
  width: 100%;
  height: 102vh;
  background-color: ${({ darkMode }) => (darkMode ? "#1A1C23" : "#F2F3F5")};
`;
const ToggleButtonsWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const OpenModal = styled.button`
  margin: 20px;
  cursor: pointer;
  background-color: rgb(8, 126, 164);
  color: white;
  border: none;
  padding: 0.75em 1.5em;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 17px;
`;

const ModalContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  transform: scale(${({ Modal }) => (Modal ? "1" : "0")});
`;

const StyledModal = styled.div<Props>`
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 0 30px;
  display: flex;
  opacity: ${({ Modal }) => (Modal ? "1" : "0")};
  transform: translate(${({ Modal }) => (Modal ? "-50%, -50%" : "-50%,-30%")});
  max-width: 800px;
  width: 100%;
  height: 300px;
  transition: 0.3s ease-in-out;
`;

const XButton = styled.button<Other>`
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 10px;
  border: none;
  background-color: transparent;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  font-size: 20px;
`;

const ContentWrapper = styled.div<Other>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  border: 1px solid grey;
  background-color: ${({ darkMode }) => (darkMode ? "#23272" : "#ffffff")};
`;

export const Modal = () => {
  const [showModal, setShowModal] = useState<Props["Modal"]>(false);

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  const [darkMode, setDarkMode] = useState<Other["darkMode"]>(false);

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  // useEffect(() => {
  //   setTimeout(handleOpen, 2000);
  // }, []);

  return (
    <Wrapper darkMode={darkMode}>
      <ToggleButtonsWrapper>
        <OpenModal onClick={handleOpen}>Open</OpenModal>
        <DarkMode handleMode={handleMode} darkMode={darkMode} />
      </ToggleButtonsWrapper>
      <ModalContainer Modal={showModal}>
        <StyledModal Modal={showModal}>
          <XButton onClick={() => handleOpen()} darkMode={darkMode}>
            x
          </XButton>
          <ModalImg />
          <ContentWrapper darkMode={darkMode}>
            <ModalContent darkMode={darkMode} />
            <ModalButtons handleOpen={handleOpen} />
          </ContentWrapper>
        </StyledModal>
      </ModalContainer>
    </Wrapper>
  );
};
