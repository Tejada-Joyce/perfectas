import React from "react";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";

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
  background-color: #fff;
  // transform: translateY(-200px);
  // transform: translateY(0);
  // transition: all 0.3s ease-in-out;
`;
const ModalHeader = styled.div`
  padding: 10px;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;

function ServiceCardModal({ show, onClose, name, time, description }) {
  if (!show) {
    return null;
  }
  return (
    <Modal>
      {/* <Modal onClick={onClose} {...(show ? "$show" : "")}> */}
      <ModalContent
      // onClick={(e) => {
      //   e.stopPropagation();
      // }}
      >
        <ModalHeader>
          <h5 style={{ margin: 0 }}>{name}</h5>
        </ModalHeader>
        <ModalBody>
          <p>{time}</p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontWeight: "bold" }}>Descripción: </span>
            {description}
          </p>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>close</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ServiceCardModal;
