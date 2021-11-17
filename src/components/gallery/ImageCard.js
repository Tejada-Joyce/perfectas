import Image from "react-bootstrap/Image";
import styled from "styled-components";
import React, { useState, Fragment } from "react";
import ImageCardModal from "./ImageCardModal";
import breakpoints from "../../styles/breakpoints";

const NewImage = styled(Image)`
  cursor: pointer;
  padding: 8px 4px;
  background-color: #f6f7f9;
  float: left;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and ${breakpoints.device.sm} {
    max-height: 300px;
  }
`;

const ImageCard = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <li style={{ width: "100%" }}>
      <Fragment>
        <NewImage
          src={src}
          loading="lazy"
          onClick={() => {
            setOpen(true);
          }}
        />
        <ImageCardModal open={open} setOpen={setOpen} src={src} />
      </Fragment>
    </li>
  );
};

export default ImageCard;
