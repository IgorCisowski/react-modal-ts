import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ModalImg } from "./ModalImg";
import { ModalContent } from "./ModalContent";
import { ModalButtons } from "./ModalButtons";

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
  // background-color: #23272f;
  transition: 0.3s ease-in-out;
`;

const XButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 1px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #23272f;
`;

export interface Props {
  Modal: boolean;
}

export const Modal = () => {
  const [showModal, setShowModal] = useState<Props["Modal"]>(false);

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setTimeout(handleOpen, 2000);
  }, []);

  return (
    <>
      <OpenModal onClick={handleOpen}>Open</OpenModal>
      <ModalContainer Modal={showModal}>
        <StyledModal Modal={showModal}>
          <XButton onClick={() => handleOpen()}>x</XButton>
          <ModalImg />
          <ContentWrapper>
            <ModalContent />
            <ModalButtons handleOpen={handleOpen} />
          </ContentWrapper>
        </StyledModal>
      </ModalContainer>
    </>
  );
};
