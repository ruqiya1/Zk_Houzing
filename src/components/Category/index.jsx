import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, ContentWrap, Img } from "./style";
import { Carousel } from "antd";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

const GenCarousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);

  return (
    <Container>
      <ContentWrap>
        <h1 className="title">Category</h1>
        <h2 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consertetur sit.
        </h2>
      </ContentWrap>
      <Slider {...settings}>
        {data.map((v) => {
          return (
            <CategoryCard
              key={v.id}
              onClick={() => navigate(`/properties?category_id=${v?.id}`)}
              data={v}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;
