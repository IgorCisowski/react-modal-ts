import React from "react";
import { createGlobalStyle } from "styled-components";
import { Modal } from "./components/Modal";

const GlobalStyle = createGlobalStyle`
  * {
    font-family:arial;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    width: 100%;
    height: 102vh;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Modal />
    </>
  );
}

export default App;
