import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h1 className="title">Recent Properties for Rent</h1>
        <h2 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consertetur sit.
        </h2>
      </Content>
      <Slider {...settings}>
        {data.map((v) => {
          return (
            <HouseCard
              key={v.id}
              onClick={() => navigate(`/properties/${v.id}`)}
              data={v}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
