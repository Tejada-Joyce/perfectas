import * as React from "react";
import Layout from "../components/common/Layout";
import GlobalCSS from "../styles/GlobalCSS.js";

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Not Found">
        <div style={{ textAlign: "center", margin: "5% auto 0", width: "80%" }}>
          <h3>Page not found</h3>
          <p style={paragraphStyles}>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
