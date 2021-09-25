import * as React from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import breakpoints from "../styles/breakpoints";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 2fr);
`;

const Button = styled.button`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  // border-radius: 4px;
  color: #000000;
  margin-left: 1em;
  padding: 0.5em;
  text-align: center;

  @media only screen and ${breakpoints.device.sm} {
    margin-left: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      display: hidden;
      @media only screen and ${breakpoints.device.sm} {
        place-self: center;
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
        <StaticImage
          src="../images/logo.jpg"
          alt="Website Title"
          // style={{ width: "100%" }}
        />
        <Button primary>Haz una Cita</Button>
        <Container>
          <Navbar expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/" style={{ color: "black" }}>
                  Inicio
                </Nav.Link>
                <Nav.Link href="/about" style={{ color: "black" }}>
                  Sobre Nosotras
                </Nav.Link>
                <Nav.Link href="/contactus" style={{ color: "black" }}>
                  Contáctanos
                </Nav.Link>
                <Nav.Link href="/services" style={{ color: "black" }}>
                  Servicios
                </Nav.Link>
                <Nav.Link href="/gallery" style={{ color: "black" }}>
                  Galería
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
