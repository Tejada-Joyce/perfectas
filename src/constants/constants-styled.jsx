import styled, { css } from "styled-components";
import breakpoints from "../styles/breakpoints";

const Button = styled.button`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  color: #000000;
  padding: 0.5em 1em;
  text-align: center;
  grid-column: 3;
  grid-row: 1;
  display: block;
  text-decoration: none;

  &:hover {
    color: white;
    background: #ff5e61;
    border: 2px solid #ff5e61;
  }

  ${(props) =>
    props.primary &&
    css`
      display: none;
      color: black;
      outline: none;
      @media only screen and ${breakpoints.device.sm} {
        display: block;
        place-self: center end;
        margin-right: 8%;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      @media only screen and ${breakpoints.device.sm} {
        width: 80%;
        display: block;
        margin: 0 auto;
      }
    `}
`;
export { Button };
