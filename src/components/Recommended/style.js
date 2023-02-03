import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 130px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 96px;
`;

const Content = styled.div`
  margin-bottom: 32px;
  text-align: center; 
`;

export { Container, Content };
