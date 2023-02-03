import React from "react";
import { Blur, Container, Content, Img } from "./style";
import Button from "../Generic/Button";
import img1 from "../../assets/img/home2.png";

const GenCarousel = () => {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
