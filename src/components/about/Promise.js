import * as React from "react";
import perfectas_inauguracion from "../../images/perfectas-inauguracion2.jpg";

import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin: 20px auto 10px;
  align-content: center;
  align-items: center;
  row-gap: 30px;

  @media only screen and ${breakpoints.device.sm} {
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 8%;
    padding-bottom: 15px;
  }

  @media only screen and ${breakpoints.device.lg} {
    column-gap: 10%;
    padding-bottom: 40px;
  }
`;
const Image = styled.img`
  width: 90%;
  @media only screen and ${breakpoints.device.sm} {
    width: 40%;
    height: 100%;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 36%;
  }
`;
const PromiseContent = styled.div`
  width: 90%;
  @media only screen and ${breakpoints.device.sm} {
    width: 40%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 30%;
  }
`;

const Promise = () => {
  return (
    <Container>
      <Image src={perfectas_inauguracion} alt="Inauguracion" />
      <PromiseContent>
        <h5>NUESTRA PROMESA</h5>
        <h4 className="about">Superior service, personalized attention</h4>
        <p style={{ fontSize: "1.15rem" }}>
          We're proud to offer the highest quality, most unique merchandise on
          the market today. From our family to yours, we put lots of love and
          careful attention in each item. We hope you enjoy our work as much as
          we enjoy bringing it to you.
        </p>
        <p style={{ fontSize: "1.15rem" }}>
          <em>Marie, The Salon Owner</em>
        </p>
      </PromiseContent>
    </Container>
  );
};

export default Promise;
