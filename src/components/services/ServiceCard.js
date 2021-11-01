import React, { useState } from "react";
import styled from "styled-components";
import { ButtonNoLink } from "../../constants/constants-styled";
import breakpoints from "../../styles/breakpoints";
import ServiceCardModal from "./ServiceCardModal";

const ServiceDetails = styled.section`
  padding: 0;
  width: 70%;
  margin: 0 auto;
`;

const ServiceCard = ({ name, time, description, button }) => {
  const [show, setShow] = useState(false);

  return (
    <li>
      <ServiceDetails>
        <h5>{name}</h5>
        <p>{time}</p>
        <ButtonNoLink $services onClick={() => setShow(true)}>
          Más información ...
        </ButtonNoLink>
        <ServiceCardModal
          name={name}
          time={time}
          description={description}
          onClose={() => setShow(false)}
          show={show}
        />
      </ServiceDetails>
    </li>
  );
};

export default ServiceCard;
