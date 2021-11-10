import images from "../../images/index.js";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import * as React from "react";
import { BannerContainer, Hero } from "../../constants/constants-styled";

const HeroStuff = styled.div`
  position: absolute;
  top: 5%;
  height: 90%;
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
    top: 10%;
    width: 40%;
    height: 80%;
    left: 5%;
  }
  @media only screen and ${breakpoints.device.lg} {
    top: 20%;
    width: 36%;
    height: 60%;
    left: 12%;
  }
`;

const MissionStatement = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  line-height: 1.2;
  display: block;
  margin: 10px auto 0;
  width: 100%;
  letter-spacing: 1px;

  @media only screen and ${breakpoints.device.lg} {
    margin: 6px auto 0;
    line-height: 1.3;
  }
`;

const Banner = () => {
  return (
    <BannerContainer $about>
      <Hero url={images.banner_images[0]} />
      <HeroStuff>
        <h5>NUESTRA MISIÓN</h5>
        <MissionStatement>
          We aim for perfection in the products we make and the service we
          provide.
        </MissionStatement>
      </HeroStuff>
    </BannerContainer>
  );
};

export default Banner;
