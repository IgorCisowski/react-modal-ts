import React from "react";
import styled from "styled-components";
import reacrImg from "../assets/logo.png";

const ImgContainer = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${reacrImg});
  background-position: center;
  background-size: cover;
  border-radius: 20px 0 0 20px;
  border: 1px solid grey;
`;

export const ModalImg = () => {
  return <ImgContainer></ImgContainer>;
};
