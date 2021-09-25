import * as React from "react";
import styled, { css } from "styled-components";
// import { StaticImage } from "gatsby-plugin-image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import breakpoints from "../styles/breakpoints";
import name from "../images/name.jpg";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Image = styled.img`
  grid-column: 1/4;
  grid-row: 1;
  width: 70%;
  place-self: center;
  margin-top: 5%;

  @media only screen and ${breakpoints.device.sm} {
    width: 45%;
    margin-top: 2%;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 30%;
  }
`;

const Button = styled.button`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  color: #000000;
  padding: 0.5em 1em;
  text-align: center;
  grid-column: 3;
  grid-row: 1;

  @media only screen and ${breakpoints.device.sm} {
    // margin-left: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      display: none;
      @media only screen and ${breakpoints.device.sm} {
        display: block;
        place-self: center end;
      }
    `}
`;

const Container = styled.div`
  grid-column: 1;
  grid-row: 1;

  @media only screen and ${breakpoints.device.sm} {
    grid-area: 2/1/3/4;
  }
`;

const TopNav = () => {
  return (
    <div>
      <Header>
        <Image src={name} alt="Perfectas" />
        <Button primary>Haz una Cita</Button>
        <Container>
          <Navbar expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/" style={{ color: "black" }}>
                  INICIO
                </Nav.Link>
                <Nav.Link href="/about" style={{ color: "black" }}>
                  SOBRE NOSOTRAS
                </Nav.Link>
                <Nav.Link href="/contactus" style={{ color: "black" }}>
                  CONTÁCTANOS
                </Nav.Link>
                <Nav.Link href="/services" style={{ color: "black" }}>
                  SERVICIOS
                </Nav.Link>
                <Nav.Link href="/gallery" style={{ color: "black" }}>
                  GALERÍA
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Header>
    </div>
  );
};
export default TopNav;
