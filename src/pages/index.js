import * as React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";
const IndexPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Home Page">
        <HomeBanner />
        <Services />
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </div>
  );
};

export default IndexPage;
