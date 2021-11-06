import Image from "react-bootstrap/Image";
import React, { useState, Fragment } from "react";
import ImageCardModal from "./ImageCardModal";

const ImageCard = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <li style={{ width: "100%" }}>
      <Fragment>
        <Image
          src={src}
          onClick={() => {
            setOpen(true);
          }}
          style={{
            cursor: "pointer",
            padding: "8px 4px",
            backgroundColor: "#f6f7f9",
            float: "left",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></Image>
        <ImageCardModal open={open} setOpen={setOpen} src={src} />
      </Fragment>
    </li>
  );
};

export default ImageCard;
