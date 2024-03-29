import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; */

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;

  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 50px;
`;

export { Container };
