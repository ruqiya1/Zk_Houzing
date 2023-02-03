import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Img = styled.img`
  width: 100%;
  height: 577px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

Content.Title = styled.h1`
  max-width: 560px;
  width: 100%;
  margin-top: 0;
  margin-bottom: 48px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export { Container, Img, Blur, Content };
