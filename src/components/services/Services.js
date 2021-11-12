import * as React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import serviceData from "../../../content/json-content.json";
import ServiceCard from "./ServiceCard.js";

const ServicesGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 2rem 0;
  row-gap: 2.5rem;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Services = () => {
  return (
    <ServicesGrid>
      {serviceData.services.map((data, index) => {
        return (
          <ServiceCard
            name={data.name}
            key={index}
            time={data.time}
            description={data.description}
          />
        );
      })}
    </ServicesGrid>
  );
};

export default Services;
