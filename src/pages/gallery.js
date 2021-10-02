import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";

const GalleryPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Galería">
        <h1>Galería</h1>
      </Layout>
    </div>
  );
};
export default GalleryPage;
