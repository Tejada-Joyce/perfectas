import styled, { css } from "styled-components";
import breakpoints from "../styles/breakpoints";

const Button = styled.button`
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
    props.primary &&
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
    props.secondary &&
    css`
      @media only screen and ${breakpoints.device.sm} {
        width: 80%;
        margin: 0 auto;
      }
    `}
`;
export { Button };
