import styled, { css } from "styled-components";
import breakpoints from "../styles/breakpoints";
import React from "react";
import { Link } from "gatsby";

const Button = styled((props) => <Link {...props} />)`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  color: #000000;
  padding: 0.5em 1em;
  text-align: center;
  display: block;
  text-decoration: none;
  font-weight: 550;
  font-size: 19px;

  &:hover {
    color: white;
    background: #ff5e61;
    border: 2px solid #ff5e61;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 80%;
  }

  ${(props) =>
    props.$primary &&
    css`
      display: none;
      color: black;
      outline: none;
      grid-column: 3;
      grid-row: 1;
      @media only screen and ${breakpoints.device.sm} {
        display: block;
        place-self: center end;
        margin-right: 8%;
        width: auto;
      }
    `}

  ${(props) =>
    props.$secondary &&
    css`
      @media only screen and ${breakpoints.device.sm} {
        width: 80%;
        margin: 0 auto;
      }
    `}
`;

const ButtonNoLink = styled.button`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  color: #000000;
  padding: 0.5em 1.5em;
  text-align: center;
  display: block;
  text-decoration: none;
  font-weight: 550;
  font-size: 18px;
  margin: 30px 0 20px;

  &:hover {
    color: white;
    background: #ff5e61;
    border: 2px solid #ff5e61;
  }

  ${(props) =>
    props.$services &&
    css`
      margin: auto;
    `}

  ${(props) =>
    props.$close &&
    css`
      margin: 0 0 0 90%;
      padding: 1px 5px;
      @media only screen and ${breakpoints.device.sm} {
        margin-left: 93%;
      }
    `}
`;

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  margin-top: 15px;

  @media only screen and ${breakpoints.device.sm} {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  ${(props) =>
    props.$home &&
    css`
      height: 65vh;
    `}

  ${(props) =>
    props.$about &&
    css`
      height: 40vh;
      @media only screen and ${breakpoints.device.sm} {
        height: 50vh;
      }
      @media only screen and ${breakpoints.device.lg} {
        height: 55vh;
      }
    `}
  
    ${(props) =>
    props.$contact &&
    css`
      height: 25vh;
      @media only screen and ${breakpoints.device.sm} {
        height: 32vh;
      }
      @media only screen and ${breakpoints.device.lg} {
        height: 45vh;
      }
    `}

    ${(props) =>
    props.$services &&
    css`
      height: 40vh;
      @media only screen and ${breakpoints.device.sm} {
        height: 35vh;
      }
      @media only screen and ${breakpoints.device.lg} {
        height: 45vh;
      }
    `}
`;

const Hero = styled.div`
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 40px;
`;

export { Button, ButtonNoLink, BannerContainer, Hero };
