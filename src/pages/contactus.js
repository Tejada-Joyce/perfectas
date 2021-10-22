import * as React from "react";
import Layout from "../components/common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalCSS from "../styles/GlobalCSS.js";
import Banner from "../components/contactus/Banner";
import Location from "../components/contactus/Location";
import ContactForm from "../components/contactus/ContactForm";

const ContactusPage = () => {
  return (
    <div>
      <GlobalCSS />
      <Layout pageTitle="Contáctanos">
        <Banner />
        <Location />
        <ContactForm />
      </Layout>
    </div>
  );
};
export default ContactusPage;
