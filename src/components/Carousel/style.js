import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 570px;
`;

const Arrow = styled(arrow)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 130px;
  width: 50px;
  height: 50px;
  padding: 18px;
  background: #857e7e;
  border-radius: 50%;
  :hover {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(arrow)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 130px;
  width: 50px;
  height: 50px;
  padding: 18px;
  background: #857e7e;
  border-radius: 50%;
  transform: rotate(180deg);
  :hover {
    opacity: 0.7;
  }
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #fff;
`;

Content.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

Content.Price = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export { Container, Arrow, ArrowRight, Img, Blur, Content };
