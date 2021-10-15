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

  h1, h2, h3, h4, h5, h6 {
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

  a {
    text-decoration: none;
    color: black;

  }

  .active {
    background: #f6afb0;    
  };

  .link:hover {
    color: white !important;
    background: #ff5e61;
  }

  a:hover {
    color: black;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  h4.about {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 20px;
    letter-spacing: 0.9px;
  }

  h5 {
    font-size: 1.2rem;
    color: #27301D;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h6 {
    font-size: 0.8rem;
    color: #27301D;
    font-weight: bold;
    letter-spacing: 0.5px;
    @media only screen and ${breakpoints.device.sm} {
      font-size: 1rem;      
    }

  li{
     font-size: 1rem;
   }
  }
   
`;

export default GlobalCSS;
