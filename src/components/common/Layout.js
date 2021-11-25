import * as React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
