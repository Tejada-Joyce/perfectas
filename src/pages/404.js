import * as React from "react";
import NotFoundInfo from "../components/404/NotFoundInfo";
import Layout from "../components/common/Layout";
import GlobalCSS from "../styles/GlobalCSS.js";

const NotFoundPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Not Found">
        <NotFoundInfo />
      </Layout>
    </div>
  );
};

export default NotFoundPage;
