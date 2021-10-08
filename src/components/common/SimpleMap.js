import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";

const GoogleMap = styled.div`
  width: 100%;
  height: 50vh;
  @media only screen and ${breakpoints.device.lg} {
  }
`;

const Pin = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  color: black;

  @media only screen and ${breakpoints.device.lg} {
    width: 15vw;
  }
`;

const LocationPin = ({ text }) => (
  <Pin>
    <Icon icon={locationIcon} style={{ fontSize: "4rem" }} />
    <p>{text}</p>
  </Pin>
);

const SimpleMap = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <GoogleMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBttHNoCLZnCiQXhZf5_ZTFn4wwSB7UZAQ" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </GoogleMap>
    </div>
  );
};

export default SimpleMap;
