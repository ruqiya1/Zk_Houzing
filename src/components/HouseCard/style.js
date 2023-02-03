import styled from "styled-components";
import { ReactComponent as bedIcon } from "../../assets/icons/bedIcon.svg";
import { ReactComponent as bathIcon } from "../../assets/icons/bathIcon.svg";
import { ReactComponent as carIcon } from "../../assets/icons/carIcon.svg";
import { ReactComponent as rulerIcon } from "../../assets/icons/rulerIcon.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 440px;
  border-radius: 10px;
  border: 2px solid #ccc;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
  margin-bottom: 15px;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding: 0 20px;
  background: #fff;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
  gap: 8px;
`;

const Icons = styled.div``;

Icons.Bad = styled(bedIcon)``;
Icons.Bath = styled(bathIcon)``;
Icons.Car = styled(carIcon)``;
Icons.Ruler = styled(rulerIcon)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 30px;
  height: 30px;
  padding: 5px;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  :active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
  margin-bottom: 8px;
`;

export { Container, Img, Content, Details, Icons, Divider };
