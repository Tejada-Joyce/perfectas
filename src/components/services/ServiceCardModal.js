import React from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { ButtonNoLink } from "../../constants/constants-styled";

const NewModal = styled(Modal)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const ModalContent = styled.section`
  width: 500px;
  height: fit-content;
  padding: 20px;
  padding-bottom: 30px;
  margin: auto;
  background-color: #fff;
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

const ServiceCardModal = ({ open, setOpen, name, time, description }) => {
  return (
    <NewModal open={open} onClose={() => setOpen(false)} closeAfterTransition>
      <Fade in={open}>
        <ModalContent>
          <ModalHeader>
            <ButtonNoLink $close onClick={() => setOpen(false)}>
              x
            </ButtonNoLink>
            <h5 style={{ margin: 0, textAlign: "center" }}>{name}</h5>
          </ModalHeader>
          <ModalBody>
            <p style={{ textAlign: "center" }}>{time}</p>
            <p style={{ textAlign: "left" }}>
              <span style={{ fontWeight: "bold" }}>Descripción: </span>
              {description}
            </p>
          </ModalBody>
        </ModalContent>
      </Fade>
    </NewModal>
  );
};

export default ServiceCardModal;
