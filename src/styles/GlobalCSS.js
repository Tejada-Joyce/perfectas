import { createGlobalStyle } from "styled-components";
import OpenSans from "../fonts/open-sans.woff";
import Butler from "../fonts/Butler.woff";
import Joane from "../fonts/Joane-Bold.woff";

import breakpoints from "./breakpoints";

const GlobalCSS = createGlobalStyle`
  @font-face {
    font-family: 'Joane';
    src: url(${Joane}) format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans}) format('woff');
  }

  @font-face {
    font-family: 'Butler';
    src: url(${Butler}) format('woff');
  }

  body {
    font-family: "Open Sans", Verdana, sans-serif;
    max-width: 1530px;
    margin: 0 auto;
    color: black;
  }

  h1, h2, h3, h4, h6 {
    font-family: 'Butler', cursive;
    color: black;
  }

  h1 {
    font-size: 4.4rem;
    word-break: break-word;

    @media only screen and ${breakpoints.device.sm} {
      font-size: 5rem;      
    }
  }

  h2 {
    font-size: 4rem;
  }

  a:hover {
    color: black;
  }

  h3 {
    font-size: 2.5rem;
  }

  h6 {
    font-size: 1.2rem;
    color: #27301D;
    font-weight: bold;
  }
   
`;

export default GlobalCSS;
