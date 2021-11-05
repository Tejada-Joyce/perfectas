import * as React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import images from "../../images/index.js";

const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 2rem 0;
  row-gap: 1.5rem;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const GalleryCard = ({ src }) => {
  return (
    <li style={{ width: "100%" }}>
      <img style={{ width: "100%" }} src={src} alt={src} />
    </li>
  );
};

const GalleryImages = () => {
  return (
    <GalleryGrid>
      {images.gallery_images.map((src, index) => {
        return <GalleryCard src={src} key={index} />;
      })}
    </GalleryGrid>
  );
};

export default GalleryImages;
