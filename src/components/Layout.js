import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Features from "./Features/Features";
import Facts from "./Facts/Facts";
import "../styles/global.css";

import "../css/bootstrap.min.css";
import "../css/style.css";
import "../lib/animate/animate.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/lightbox/css/lightbox.min.css";
import Topbar from "./Topbar";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import Products from "../projects/Products";
import Quote from "./Quote/Quote";
import Service from "./Service/Service";
//import Spinner from "./Spinner";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      <div className="content">
        {/* { content load for each page } */}
        {children}
        <Features />
        <Facts />
        <Service />
        <Quote />
        <Products />
        <Team />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
