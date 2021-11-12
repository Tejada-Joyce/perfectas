import React, { useState } from "react";
import styled from "styled-components";
import { ButtonNoLink } from "../../constants/constants-styled";
import ServiceCardModal from "./ServiceCardModal";

const ServiceDetails = styled.section`
  padding: 15px 0;
  width: 70%;
  margin: 0 auto;
`;

const ServiceCard = ({ name, time, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <ServiceDetails>
        <h5>{name}</h5>
        <p>{time}</p>
        <ButtonNoLink $services onClick={() => setOpen(true)}>
          Más información ...
        </ButtonNoLink>
        <ServiceCardModal
          name={name}
          time={time}
          description={description}
          open={open}
          setOpen={setOpen}
        />
      </ServiceDetails>
    </li>
  );
};

export default ServiceCard;
