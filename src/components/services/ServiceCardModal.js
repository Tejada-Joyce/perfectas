import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { ButtonNoLink } from "../../constants/constants-styled";

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-item: center;
  justify-content: center;
  // opacity: 1;
  // transition: all 0.3s ease-in-out;
  // pointer-events: none;
  ${(props) =>
    props.$show &&
    css`
      opacity: 1;
      pointer-events: visible;
      transform: translateY(0);
    `}
`;

const ModalContent = styled.section`
  width: 500px;
  height: fit-content;
  padding: 20px;
  margin: auto;
  background-color: #fff;
  // transform: translateY(-200px);
  // transform: translateY(0);
  // transition: all 0.3s ease-in-out;
`;
const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;

const ServiceCardModal = ({ show, onClose, name, time, description }) => {
  if (!show) {
    return null;
  }

  // const closeOnEscapeKeyDown = (e) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     onClose();
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener("keydown", closeOnEscapeKeyDown);
  //   return function cleanup() {
  //     document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  //   };
  // }, []);

  return (
    <Modal onClick={onClose}>
      {/* <Modal onClick={onClose} {...(show ? "$show" : "")}> */}
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <ButtonNoLink $close onClick={onClose}>
            x
          </ButtonNoLink>
          <h5 style={{ margin: 0 }}>{name}</h5>
        </ModalHeader>
        <ModalBody>
          <p>{time}</p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontWeight: "bold" }}>Descripción: </span>
            {description}
          </p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ServiceCardModal;
