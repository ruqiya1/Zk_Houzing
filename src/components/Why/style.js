import styled from "styled-components";
import { ReactComponent as smail } from "../../assets/icons/smail.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin: auto;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 235px;
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* height: 430px; */
  margin-top: 40px;
`;

const Icon = styled.div``;
Icon.Smail = styled(smail)`
  margin-bottom: 24px;
`;

Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;

Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;

Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, ContentWrap, Content, Wrapper, Icon };
