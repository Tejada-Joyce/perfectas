import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import Modal from "@material-ui/core/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Image = styled.img`
  max-height: 300px;
  padding: 8px;
  background-color: #f6f7f9;
  @media only screen and ${breakpoints.device.sm} {
    max-height: 500px;
  }
`;

const modal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const ModalContent = styled.section`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 20px;
  padding-bottom: 30px;
  margin: auto;
  background-color: #fff;
`;

const ImageCardModal = ({ open, setOpen, src, length, imageList }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal
      style={modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      disableScrollLock
    >
      <DialogContent>
        {/* <Fade in={open}> */}
        <Slider {...settings}>
          {/* <ModalContent> */}
          {imageList.map((src) => {
            return <Image src={src} alt={src} />;
          })}
          {/* </ModalContent> */}
          {/* <p>text</p>
            <Image src={src} alt={src} />
            <p>text</p> */}
        </Slider>
      </DialogContent>
      {/* </Fade> */}
    </Modal>
  );
};

export default ImageCardModal;
