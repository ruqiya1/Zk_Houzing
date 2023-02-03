import { message } from "antd";
import React, { useContext } from "react";
import noImg from "../../assets/img/noImg.png";
import { PropertiesContext } from "../../context/properties";

import {
  Container,
  Content,
  Details,
  Divider,
  Icons,
  Img,
} from "./style";

const HouseCard = ({ data = {}, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    url,
    attachments,
    city,
    country,
    desc,
    adress,
    houseDetails,
    salePrice,
    price,
    category,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Successfully Disliked");
        else res?.success && message.info("Successfully Liked");
        refetch && refetch();
      });
  };

  return (
    <div style={{ display: "flex" }} onClick={onClick}>
      <Container>
        <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
        <Content>
          <div className="subTitle inline">
            {city}, {country}, {desc}
          </div>
          <div className="info inline">
            {adress || "Quincy St, Brooklyn, NY, USA"} -{" "}
            {category?.name || "Category"} {houseDetails?.room || 0}-rooms
          </div>
          <Details>
            <Details.Item>
              <Icons.Bad />
              <div className="info">4 Beds {houseDetails?.beds || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Bath />
              <div className="info">5 Baths {houseDetails?.bath || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Car />
              <div className="info">1 Garage</div>
            </Details.Item>
            <Details.Item>
              <Icons.Ruler />
              <div className="info">1200 Sq Ft</div>
            </Details.Item>
          </Details>
        </Content>
        <Divider />
        <Content footer>
          <Details.Item footer>
            <div className="info">${salePrice || 0}/mo</div>
            <div className="subTitle">${price || 0}/mo</div>
          </Details.Item>
          <Details.Item row>
            <Icons.Resize />
            <Icons.Love onClick={save} favorite={favorite} />
          </Details.Item>
        </Content>
      </Container>
    </div>
  );
};

export default HouseCard;
