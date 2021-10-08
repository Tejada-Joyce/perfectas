import * as React from "react";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import SimpleMap from "../common/SimpleMap";

const location = {
  address: "Calle Antiquilla 319 Yanahuara, Arequipa, Peru",
  lng: -71.54586,
  lat: -16.39244,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Location = () => {
  return (
    <Container>
      <SimpleMap location={location} zoomLevel={17} />
      <div>
        <h2>Direccion</h2>
        <ul>
          <li>a</li>
        </ul>
      </div>
    </Container>
  );
};

export default Location;
