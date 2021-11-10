import images from "../../images/index.js";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import * as React from "react";
import {
  Button,
  BannerContainer,
  Hero,
} from "../../constants/constants-styled";

const HeroStuff = styled.div`
  position: absolute;
  top: 30%;
  width: 80%;
  left: 8%;
  text-align: center;
  @media only screen and ${breakpoints.device.sm} {
    top: 25%;
    width: 40%;
  }
  @media only screen and ${breakpoints.device.lg} {
    top: 30%;
    width: 30%;
  }
`;
const HomeBanner = () => {
  return (
    <BannerContainer $home>
      <Hero url={images.banner_images[0]} />
      <HeroStuff>
        <h3>Donde la Exclusividad Eres Tú</h3>
        <Button $secondary to="/contactus">
          Haz una Cita
        </Button>
      </HeroStuff>
    </BannerContainer>
  );
};

export default HomeBanner;
