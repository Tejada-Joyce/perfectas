import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";

const ContactusPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Contáctanos">
        <h1>Contáctanos</h1>
      </Layout>
    </div>
  );
};
export default ContactusPage;
