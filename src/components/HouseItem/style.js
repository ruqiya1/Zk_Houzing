import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bedIcon } from "../../assets/icons/bedIcon.svg";
import { ReactComponent as bathIcon } from "../../assets/icons/bathIcon.svg";
import { ReactComponent as carIcon } from "../../assets/icons/carIcon.svg";
import { ReactComponent as rulerIcon } from "../../assets/icons/rulerIcon.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: var(--width);
  margin: auto;
  padding-bottom: 48px;
`;

const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: ;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icons = styled.div``;

Icons.Bad = styled(bedIcon)``;
Icons.Bath = styled(bathIcon)``;
Icons.Car = styled(carIcon)``;
Icons.Ruler = styled(rulerIcon)``;
Icons.Resize = styled(resize)``;

Icons.Share = styled(share)`
  display: inline-block;
  padding: 2px;
  background: #ccc;
  /* background: #f6f8f9; */
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  display: inline-block;
  padding: 2px;
  background: #ccc;
  /* background: #f6f8f9; */
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 35px;
  color: #696969;
`;

const Description = styled.div`
  margin: 16px 0 48px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

export {
  Container,
  Wrapper,
  Section,
  Details,
  Content,
  Icons,
  Description,
  User,
};
