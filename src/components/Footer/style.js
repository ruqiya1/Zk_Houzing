import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as email } from "../../assets/icons/email.svg";

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  width: 100%;
`;

Content.Title = styled.div`
  margin-top: 0;
  margin-bottom: 32px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
flex-wrap:wrap;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Location = styled(location)`
  /* width: 18px;
  height: 18px; */
  /* font-size:16px; */
  margin-right: 21px;
  width: 18px;
  height: 18px;
`;

Icon.Phone = styled(phone)`
  width: 18px;
  height: 18px;
  margin-right: 21px;
`;

Icon.Email = styled(email)`
  width: 18px;
  height: 18px;
  margin-right: 21px;
`;

export { Container, Content, Icon };
