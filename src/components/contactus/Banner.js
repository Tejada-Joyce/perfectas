import images from "../../images/index.js";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import * as React from "react";
import { BannerContainer, Hero } from "../../constants/constants-styled";

const HeroStuff = styled.div`
  position: absolute;
  top: 10%;
  height: 80%;
  left: 5%;
  width: 90%;
  text-align: center;
  align-content: center;
  background: white;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    top: 15%;
    height: 70%;
    left: 20%;
    width: 60%;
  }
  @media only screen and ${breakpoints.device.lg} {
    top: 18%;
    height: 64%;
    left: 25%;
    width: 50%;
    row-gap: 0.5rem;
  }
`;

const Banner = () => {
  return (
    <BannerContainer $contact>
      <Hero url={images.banner_images[0]} />
      <HeroStuff>
        <h3 style={{ fontWeight: 600, letterSpacing: 1.2 }}>Contáctanos</h3>
        <p style={{ marginBottom: 0 }}>We're just outside the city center</p>
      </HeroStuff>
    </BannerContainer>
  );
};

export default Banner;
