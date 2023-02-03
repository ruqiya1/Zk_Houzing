import styled from "styled-components";
import { Tabs } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  background: #e6e9ec;
`;

const AntTabs = styled(Tabs)`
  margin: 64px;
  width: 100%;
  max-width: 450px;
`;
export { Container, AntTabs };
