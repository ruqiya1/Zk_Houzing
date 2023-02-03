import React from "react";
import Carousel from "../Carousel";
import Recommended from "../Recommended";
import Why from "../Why";
import Category from "../Category";
import Banner from "../Banner";
import Recent from "../Recent";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};
export default Home;
