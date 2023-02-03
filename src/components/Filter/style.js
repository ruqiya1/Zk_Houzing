import styled from "styled-components";
import { ReactComponent as homeIcon } from "../../assets/icons/homeIcon.svg";
import { ReactComponent as advencedIcon } from "../../assets/icons/advancedIcon.svg";
import { ReactComponent as searchIcon } from "../../assets/icons/searchIcon.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.homeIcon = styled(homeIcon)``;
Icons.advencedIcon = styled(advencedIcon)`
  margin-right: 10px;
`;
Icons.searchIcon = styled(searchIcon)`
  margin-right: 10px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 180px;
  width: 100%;
  max-width: 150px;
  height: 43px !important;
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
