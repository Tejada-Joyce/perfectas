import * as React from "react";
import NotFoundInfo from "../components/404/NotFoundInfo";
import GlobalCSS from "../styles/GlobalCSS.js";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";
import images from "../images/index.js";

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

const NotFoundPage = () => {
  return (
    <div>
      <GlobalCSS />
      <div>
        <title>Not Found</title>
        <main>
          <Header>
            <Image src={images.website_name} alt="Perfectas" />
          </Header>
          <NotFoundInfo />
        </main>
      </div>
    </div>
  );
};

export default NotFoundPage;
