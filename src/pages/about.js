import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import Banner from "../components/about/Banner";
import Promise from "../components/about/Promise";
import OwnersBio from "../components/about/OnwersBio";

const AboutPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Sobre Nosotras">
        <Banner />
        <Promise />
        <OwnersBio />
      </Layout>
    </div>
  );
};
export default AboutPage;
