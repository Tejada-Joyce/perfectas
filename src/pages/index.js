import * as React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
const IndexPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </div>
  );
};

export default IndexPage;
