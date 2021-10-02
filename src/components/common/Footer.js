import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { SocialIcon } from "react-social-icons";

const FooterContainer = styled.footer`
  background-color: #f6afb0;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ContactInfoContainer = styled.div`
  border-bottom: 2px solid black;
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialMediaCont = styled.div`
  text-align: center;
  display: flex;
  column-gap: 3px;
  margin: 0 auto;
  @media only screen and ${breakpoints.device.sm} {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfoContainer>
        <Link
          to="/contactus"
          style={{ textDecoration: "none", color: "black" }}
        >
          Contáctanos
        </Link>
        <SocialMediaCont>
          <SocialMediaIconsReact
            borderColor="#f6afb0"
            icon="facebook"
            iconColor="#ff9c9d"
            backgroundColor="white"
            url="https://www.facebook.com/PercfetasEA"
            size="35"
            roundness="50%"
          />
          <SocialMediaIconsReact
            borderColor="#f6afb0"
            icon="instagram"
            iconColor="#ff9c9d"
            backgroundColor="white"
            url="https://www.instagram.com/perfectas.esteticaavanzada/"
            size="35"
            roundness="50%"
          />
          <SocialMediaIconsReact
            borderColor="#f6afb0"
            icon="messenger"
            iconColor="#ff9c9d"
            backgroundColor="white"
            url="http://m.me/PercfetasEA"
            size="35"
            roundness="50%"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send?phone=51988583553&app=facebook&entry_point=page_cta&fbclid=IwAR02hRM0ARHt8TBHIThyERP6Haaqt3brvrKVVf_ih_4EQEYu_A3ZL_iG9wA"
            bgColor="white"
            fgColor="#ff9c9d"
            style={{ height: 33, width: 33 }}
            target={"_blank"}
          />
        </SocialMediaCont>
      </ContactInfoContainer>
      <div style={{ minWidth: "80%" }}>
        <p>Calle Antiquilla 319 Yanahuara 51, Arequipa, Peru</p>
        <p style={{ fontStyle: "italic" }}>
          &copy; {new Date().getFullYear()} Copyright Perfectas{" "}
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
