import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./TopNav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <TopNav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
