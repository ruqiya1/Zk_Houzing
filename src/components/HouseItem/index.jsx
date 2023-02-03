import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "../Generic";
import noUser from "../../assets/img/noUser.jpg";
import Recent from "../Recent";
import {
  Container,
  Content,
  Description,
  Details,
  Icons,
  Section,
  User,
  Wrapper,
} from "./style";
import { Yandex } from "../Generic/Maps";


const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params.id]);
  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <div>
              <Content.Title large>{data?.name || "Uzbekistan"}</Content.Title>
              <div className="info">
                {data?.city || "Tashkent"},{data?.address},{data?.country},
              </div>
            </div>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bad />
              <Details.Title>
                4 Beds {data?.houseDetails?.beds || 0}
              </Details.Title>
              <Icons.Bath />
              <Details.Title>
                5 Baths {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Car />
              <Details.Title>1 Garage</Details.Title>
              <Icons.Ruler />
              <Details.Title>1200 Sq Ft</Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title> ${data?.price || 0}/mo</Details.Title>
                </del>
                <h2 className="title">${data?.salePrice || 0}/mo</h2>
              </Content>
              <div className="info" style={{ textAlign: "end" }}>
                {data?.user?.firstname || "Ruqiya"}
              </div>
            </Content>
          </Section>
          <Content.Title>Descroption</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title mb={30}>Features</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>

            <Container gap={25}>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Lawn{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Laundry {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Microwave {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Outdoor Shower {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>

            <Container gap={25}>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Refrigerator{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Sauna{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Swimming Pool{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  TV Cable{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>

            <Container gap={25}>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Washer{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  WiFi{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Window Coverings{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bad />
                <Details.Title>
                  Dining room{data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={noUser} alt="user image" />
            <Content>
              <div className="subTitle">WebBrain Academy</div>
              <div className="info">+998 33 576 200-20</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Yandex />
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
