import * as React from "react";
// import { Link } from "gatsby";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <TopNav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
