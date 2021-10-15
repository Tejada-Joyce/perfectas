import * as React from "react";
import styled, { css } from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import breakpoints from "../../styles/breakpoints";
import name from "../../images/name.jpg";
import { Button } from "../../constants/constants-styled";
import { Link } from "gatsby";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 8px;
  @media only screen and ${breakpoints.device.sm} {
    margin-top: 0;
  }
`;

const Image = styled.img`
  grid-column: 1/4;
  grid-row: 1;
  width: 70%;
  place-self: start center;

  @media only screen and ${breakpoints.device.sm} {
    place-self: center;
    width: 45%;
    margin-top: 2%;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 30%;
    margin-down: 10px;
  }
`;

const Container = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  margin-top: 5px;
  align-self: end;

  @media only screen and ${breakpoints.device.sm} {
    grid-area: 2/1/3/4;
    margin-top: 0;
  }
`;

const navLinkStyle = {
  color: "black",
  letterSpacing: "1px",
  textAlign: "center",
  padding: "10px",
};

const menuLinks = [
  {
    to: "/",
    children: "INICIO",
  },
  {
    to: "/about",
    children: "SOBRE NOSOTRAS",
  },

  {
    to: "/contactus",
    children: "CONTÁCTANOS",
  },

  {
    to: "/services",
    children: "SERVICIOS",
  },

  {
    to: "/gallery",
    children: "GALERÍA",
  },
];

const NavLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      style={navLinkStyle}
      activeClassName="active"
      className="link"
    >
      {children}
    </Link>
  );
};
const TopNav = () => {
  return (
    <div>
      <Header>
        <Image src={name} alt="Perfectas" />
        <Button primary as="a" href="/contactus">
          Haz una Cita
        </Button>
        <Container>
          <Navbar expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" size="sm" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ width: "100%" }}
            >
              <Nav className="m-auto" style={{ gap: "15px" }}>
                {menuLinks.map((item) => {
                  return <NavLink to={item.to} children={item.children} />;
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Header>
    </div>
  );
};
export default TopNav;
