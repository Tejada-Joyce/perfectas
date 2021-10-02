import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";

const ServicesPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Servicios">
        <h1>Servicios</h1>
      </Layout>
    </div>
  );
};
export default ServicesPage;
