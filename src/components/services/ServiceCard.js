import React, { useState } from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import ServiceCardModal from "./ServiceCardModal";

const ServiceDetails = styled.section`
  padding: 0;
  width: 70%;
  margin: 0 auto;
`;
const ServiceCard = ({ name, time, description }) => {
  const [show, setShow] = useState(false);

  return (
    <li>
      <ServiceDetails>
        <h5>{name}</h5>
        <p>{time}</p>
        <button onClick={() => setShow(true)}>Más información ...</button>
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
