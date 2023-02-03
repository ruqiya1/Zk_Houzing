import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  filter: brightness(40%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
`;

export { Container, Img, Content };
