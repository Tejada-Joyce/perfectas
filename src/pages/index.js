import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import HomeBanner from "../components/home/HomeBanner";
import { Services } from "../components/home/ServMission";
import { Mission } from "../components/home/ServMission";

const IndexPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Home Page">
        <HomeBanner />
        <Services />
        <Mission />
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </div>
  );
};

export default IndexPage;
