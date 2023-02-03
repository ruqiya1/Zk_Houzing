import React, { useRef } from "react";
import { Arrow, ArrowRight, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/home1.png";
import img2 from "../../assets/img/home2.png";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Text>112 Glenwood Ave Hyde Park, Boston, MA</Content.Text>
        <Content.Price>$5,250/mo</Content.Price>
      </Content> 
      <Arrow onClick={onMove} data-name="left" left='true' />
      <ArrowRight onClick={onMove} data-name="right" right='true' />
    </Container>
  );
};

export default GenCarousel;
