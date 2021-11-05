import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import Banner from "../components/gallery/Banner";
import GalleryImages from "../components/gallery/GalleryImages";

const GalleryPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Galería">
        <Banner />
        <GalleryImages />
      </Layout>
    </div>
  );
};
export default GalleryPage;
