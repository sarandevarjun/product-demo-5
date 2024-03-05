import React from "react";
import Layout from "../components/Layout";
//import { graphql } from "gatsby";
import Carousel from "../carousel/Carousel";
const Home = () => {
  return (
    <>
      <Layout>
        <Carousel />
      </Layout>
    </>
  );
};

export default Home;
