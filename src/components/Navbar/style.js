import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin: 0 32px;
`;

const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 5px;
  gap: 16px;
  background: #ffffff;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  cursor: pointer;
`;

export { Container, Main, Menu, Wrapper, Section, Logo, Link };
