import React from "react";
import { Container, Content, Icon } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location /> Bunyodkor ko'chasi, Chilonzor <br /> 64-dom, 2-etaj,
          1-xona, <br /> WebBrain Academy
        </Content.Item>
        <Content.Item>
          <Icon.Phone /> +998 33 576 20-20
        </Content.Item>
        <Content.Item>
          <Icon.Email /> webbrainacademy@gmil.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>India</Content.Item>
        <Content.Item>UAE</Content.Item>
        <Content.Item>Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>FrontEnd</Content.Item>
        <Content.Item>BackEnd</Content.Item>
        <Content.Item>Mobile</Content.Item>
        <Content.Item>Flutter</Content.Item>
        <Content.Item>Android</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/cmd_94</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
