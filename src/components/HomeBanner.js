import banner_home_image_url from "../images/spa-banner.jpg";
import styled, { css } from "styled-components";
import breakpoints from "../styles/breakpoints";
import * as React from "react";
import { Button } from "../constants/constants-styled";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  margin-top: 15px;

  @media only screen and ${breakpoints.device.sm} {
    margin-top: 0;
  }
`;

const Hero = styled.div`
  background: url(${banner_home_image_url}) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 40px;
`;

const HeroStuff = styled.div`
  position: absolute;
  top: 30%;
  width: 80%;
  left: 8%;
  text-align: center;
  @media only screen and ${breakpoints.device.sm} {
    top: 25%;
    width: 40%;
    // left: 40px;
  }
  @media only screen and ${breakpoints.device.lg} {
    top: 30%;
    width: 30%;
  }
`;
const HomeBanner = () => {
  return (
    <Container>
      <Hero />
      <HeroStuff>
        <h3>Donde la Exclusividad Eres Tú</h3>
        <Button secondary as="a" href="/contactus">
          Haz una Cita
        </Button>
      </HeroStuff>
    </Container>
  );
};

export default HomeBanner;
