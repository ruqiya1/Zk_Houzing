import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return { background: "#0061df", border: "none", color: "#fff" };
    default:
      return { background: "#0061df", border: "none", color: "#fff" };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ fontSize }) => (fontSize ? fontSize`${fontSize}px` : `14px`)};
  height: ${({ height }) => (height ? height`${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "40px" : "20px")};

  :focus {
    border: 1px solid #0061df;
  }
  /* ${getType} */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
`;

const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 13px;
`;

export { Container, Wrapper, Icon };
