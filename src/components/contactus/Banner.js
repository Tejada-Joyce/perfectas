import banner_home_image_url from "../../images/spa-banner.jpg";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import * as React from "react";

const Container = styled.div`
  height: 45vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  margin-top: 15px;

  @media only screen and ${breakpoints.device.sm} {
    height: 65vh;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  @media only screen and ${breakpoints.device.sm} {
    height: 55vh;
    margin-top: 10px;
    margin-bottom: 40px;
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
  top: 5%;
  width: 90%;
  height: 90%;
  left: 5%;
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
  margin: 17px auto 0;
  width: 100%;
  letter-spacing: 1px;

  @media only screen and ${breakpoints.device.lg} {
    margin: 6px auto 0;
    line-height: 1.3;
  }
`;

const Banner = () => {
  return (
    <Container>
      <Hero />
      <HeroStuff>
        <h5>NUESTRA MISIÓN</h5>
        <MissionStatement>
          We aim for perfection in the products we make and the service we
          provide.
        </MissionStatement>
      </HeroStuff>
    </Container>
  );
};

export default Banner;
