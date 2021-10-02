import makeup from "../images/makeup.jpg";
import styled, { css } from "styled-components";
import breakpoints from "../styles/breakpoints";
import * as React from "react";
import { Button } from "../constants/constants-styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 30px;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServicesIntro = styled.div`
  width: 80%;
  @media only screen and ${breakpoints.device.sm} {
    width: 70%;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  grid-row: 1;
  @media only screen and ${breakpoints.device.sm} {
    grid-column: 2;
    width: 60%;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  max-height: 600px;
  width: 100%;
`;

const MissionStatement = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  line-height: 1.2;
  @media only screen and ${breakpoints.device.sm} {
    width: 65%;
    font-size: 2rem;
    line-height: 1.6;
  }
`;

const MissionContainer = styled.div`
  width: 80%;
  text-align: center;
  margin: 20px auto;
  @media only screen and ${breakpoints.device.sm} {
    width: 65%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 47%;
  }
`;

const Mission = () => {
  return (
    <div
      style={{ background: "#f6f7f9", padding: "20px 0", marginTop: "20px" }}
    >
      <MissionContainer>
        <h6>NUESTRA MISIÓN</h6>
        <MissionStatement>
          We believe taking action towards sustainability and social justice is
          important for the beauty industry. From recycling to respectful open
          conversations.
        </MissionStatement>
      </MissionContainer>
    </div>
  );
};

const Services = () => {
  return (
    <Container>
      <ServicesIntro>
        <h3>LO QUE OFRECEMOS</h3>
        <p style={{ color: "grey" }}>Skin Health. Nail Love.</p>
        <p>
          We take an holistic approach to your health &#38; beauty.
          <br />
          <br />
          Our team work with clients on a very personal level to achieve their
          ideas about a positive image.
        </p>
        <Button as="a" href="/services">
          Explora Nuestros Servicios
        </Button>
      </ServicesIntro>
      <ImageContainer>
        <Image src={makeup} alt="Girl Makeup" roundedCircle />
      </ImageContainer>
    </Container>
  );
};

export { Services, Mission };