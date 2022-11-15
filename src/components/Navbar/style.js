import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
`;

const Section = styled.div`
  .active {
    color: #97be37;
  }
`;

const Logo = styled(logoImg)`
  cursor: pointer;
  width: 110px;
  height: 35px;
  /* & path {
    fill: red;
  } */
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin: 0 32px;
`;

export { Container, Wrapper, Section, Logo, Link };
