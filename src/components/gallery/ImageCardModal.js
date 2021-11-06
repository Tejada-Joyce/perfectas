import React from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Image = styled.img`
  max-height: 220px;
  padding: 8px;
  background-color: #f6f7f9;
  @media only screen and ${breakpoints.device.sm} {
    max-height: 400px;
  }
`;

const modal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const ImageCardModal = ({ open, setOpen, src }) => {
  return (
    <Modal
      style={modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
    >
      <Fade in={open}>
        <Image src={src} alt={src} />
      </Fade>
    </Modal>
  );
};

export default ImageCardModal;
