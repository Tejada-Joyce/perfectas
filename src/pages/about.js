import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import Banner from "../components/about/Banner";

const AboutPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Sobre Nosotras">
        <Banner />
        <h1>Sobre Nosotras</h1>
      </Layout>
    </div>
  );
};
export default AboutPage;
