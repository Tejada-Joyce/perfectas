import * as React from "react";
import images from "../../images/index.js";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  margin: 10px auto;
  row-gap: 15px;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    margin: 30px auto;
  }

  @media only screen and ${breakpoints.device.lg} {
    justify-content: center;
    column-gap: 5%;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 35%;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  width: 30%;
  height: 100%;
  @media only screen and ${breakpoints.device.sm} {
    width: 55%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 50%;
  }
`;

const OwnerBio = styled.div`
  width: 50%;
  @media only screen and ${breakpoints.device.sm} {
    width: 80%;
  }
`;
const Card = ({ src, biography, name }) => {
  return (
    <OwnerInfo>
      <Image src={src} alt={name} />
      <OwnerBio>
        <h4 className="about">{name}</h4>
        <p>{biography}</p>
      </OwnerBio>
    </OwnerInfo>
  );
};

const bios = [
  {
    src: images.owners_images[0],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit nulla. Maecenas dapibus vitae erat eu porta. Quisque malesuada consectetur tellus eu sodales. Integer blandit orci quis eros egestas faucibus sit amet quis quam.",
    name: "Mayita Alvarez",
  },
  {
    src: images.owners_images[1],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit nulla. Maecenas dapibus vitae erat eu porta. Quisque malesuada consectetur tellus eu sodales. Integer blandit orci quis eros egestas faucibus sit amet quis quam.",
    name: "Liz Surco",
  },
];

const OwnersBio = () => {
  return (
    <Container>
      {bios.map((item, index) => {
        return (
          <Card
            src={item.src}
            key={index}
            biography={item.biography}
            name={item.name}
          />
        );
      })}
    </Container>
  );
};

export default OwnersBio;
