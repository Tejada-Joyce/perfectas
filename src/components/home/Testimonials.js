import * as React from "react";
import person1 from "../../images/person1.jpeg";
import person2 from "../../images/person2.jpeg";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 0 15px;
  text-align: center;
  margin: 10px auto;
  row-gap: 20px;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    margin: 30px auto;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  max-height: 100px;
  margin-bottom: 20px;
  @media only screen and ${breakpoints.device.sm} {
    max-height: 150px;
  }
`;

const TestimonyContainer = styled.div`
  max-width: 200px;
  @media only screen and ${breakpoints.device.sm} {
    max-width: 250px;
  }
  @media only screen and ${breakpoints.device.lg} {
    max-width: 320px;
  }
`;

const Review = styled.h3`
  font-size: 1.3rem;
  font-weight: 550;
  margin-bottom: 20px;

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

const Card = ({ src, content, name, key }) => {
  return (
    <TestimonyContainer key={key}>
      <Image src={src} alt="Customer" />
      <Review>{content}</Review>
      <h6>{name}</h6>
    </TestimonyContainer>
  );
};

const testimony = [
  {
    src: person1,
    content:
      '"This is the best salon in town. I will never go somewhere else."',
    name: "ROSA PALACIOS",
  },
  {
    src: person2,
    content:
      '"This is the best salon in town. I will never go somewhere else."',
    name: "ROSA PALACIOS",
  },
];

const Testimonials = () => {
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

export default Testimonials;
