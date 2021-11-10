import images from "../../images/index.js";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import * as React from "react";
import { Button } from "../../constants/constants-styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 30px;
  padding: 25px 0 15px;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
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
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  line-height: 1.2;
  display: block;
  margin: 17px auto 0;
  width: 80%;
  letter-spacing: 1px;

  @media only screen and ${breakpoints.device.sm} {
    width: 60%;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: 0.5px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 45%;
  }
`;

const MissionContainer = styled.div`
  text-align: center;
  margin: 35px auto;
`;

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
        <Button to="/services">Explora Nuestros Servicios</Button>
      </ServicesIntro>
      <ImageContainer>
        <Image
          src={images.home_service_image}
          alt="Girl Makeup"
          roundedCircle
        />
      </ImageContainer>
    </Container>
  );
};

const Mission = () => {
  return (
    <div
      style={{ background: "#f6f7f9", padding: "20px 0", marginTop: "20px" }}
    >
      <MissionContainer>
        <h5>NUESTRA MISIÓN</h5>
        <MissionStatement>
          We believe taking action towards sustainability and social justice is
          important for the beauty industry. From recycling to respectful open
          conversations.
        </MissionStatement>
      </MissionContainer>
    </div>
  );
};

export { Services, Mission };
