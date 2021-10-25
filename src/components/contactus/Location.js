import * as React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import SimpleMap from "../common/SimpleMap";

const location = {
  address: "Calle Antiquilla 319 Yanahuara, Arequipa, Peru",
  lng: -71.54586,
  lat: -16.39244,
};

const address = [
  "Perfectas",
  "Calle Antiquilla 319",
  "Yanahuara",
  "Arequipa, Peru",
];

const phoneNumber = "+51 988 583 553";

const days = [
  {
    day: "Lunes",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Martes",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Miercoles",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Jueves",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Viernes",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Sábado",
    hours: "9:00 AM - 8:00 PM",
  },
  {
    day: "Domingo",
    hours: "Closed",
  },
];

const DayTime = ({ day, hours }) => {
  return (
    <li>
      {day}: {hours}
    </li>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media only screen and ${breakpoints.device.lg} {
    // grid-template-columns: 1fr 1fr;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1rem;
  margin: 30px auto 0;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${breakpoints.device.lg} {
    margin: 0;
    margin-left: 15%;
  }
`;

const DataContainer = styled.div`
  margin: 20px auto;
  width: 85%;

  @media only screen and ${breakpoints.device.lg} {
    display: grid;
    grid-template-columns: 30% 70%;
    width: 75%;
  }
`;

const ulStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: 1.65,
};

const Location = () => {
  return (
    <Container>
      <SimpleMap location={location} zoomLevel={17} />
      <DataContainer>
        <h4 style={{ fontWeight: 600, letterSpacing: 1.2, lineHeight: 1.4 }}>
          Dirección y Horario de Atención
        </h4>
        <InfoContainer>
          <ul style={ulStyle}>
            {address.map((item) => {
              return <li>{item}</li>;
            })}
            <li>
              <a href={"tel:'+51" + phoneNumber + "'"}>{phoneNumber}</a>
            </li>
            <li style={{ marginTop: 12 }}>
              <a
                href="https://goo.gl/maps/xtJtEbPL1MMK6xP27"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Cómo llegar
              </a>
            </li>
          </ul>
          <ul style={ulStyle}>
            {days.map((day) => {
              return <DayTime day={day.day} hours={day.hours} />;
            })}
          </ul>
        </InfoContainer>
      </DataContainer>
    </Container>
  );
};

export default Location;
