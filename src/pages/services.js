import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import Banner from "../components/services/Banner";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Servicios">
        <Banner />
        <Services />
      </Layout>
    </div>
  );
};
export default ServicesPage;
