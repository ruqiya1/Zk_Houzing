import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
// useReques

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <h1 className="title">Properties</h1>
      <p className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Container>
        {data?.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Properties;
