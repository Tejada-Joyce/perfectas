import * as React from "react";
import person1 from "../../images/person1.jpeg";
import person2 from "../../images/person2.jpeg";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 0 15px;
  text-align: center;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  max-height: 150px;
  margin-bottom: 20px;
  @media only screen and ${breakpoints.device.sm} {
  }
`;

const TestimonyContainer = styled.div`
  max-width: 400px;
  @media only screen and ${breakpoints.device.sm} {
    max-width: 250px;
  }
  @media only screen and ${breakpoints.device.lg} {
    max-width: 400px;
  }
`;

const Location = () => {
  return (
    <Container>
      {testimony.map((item, index) => {
        return (
          <Card
            src={item.src}
            key={index}
            content={item.content}
            name={item.name}
          />
        );
      })}
    </Container>
  );
};

export default Location;
