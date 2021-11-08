import * as React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import images from "../../images/index.js";
import ImageCard from "./ImageCard";

const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 0 1rem 2.2rem;
  row-gap: 1.5rem;
  column-gap: 2rem;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Comment = styled.p`
  text-align: center;
  margin: 0 10px 25px;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 18px;
  }
  @media only screen and ${breakpoints.device.lg} {
    font-size: 20px;
  }
`;

const GalleryImages = () => {
  return (
    <div>
      <GalleryGrid>
        {images.gallery_images.map((src, index) => {
          return <ImageCard src={src} key={index} />;
        })}
      </GalleryGrid>
      <Comment>
        ¡Visita nuestras redes sociales y encuentra más de nuestro trabajo!
      </Comment>
    </div>
  );
};

export default GalleryImages;
