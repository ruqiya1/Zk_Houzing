import { Container, Content, Img } from "./style";
import noImg from "../../assets/img/noImg.png";
import categoryHouse from "../../assets/img/categoryHouse.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={categoryHouse || noImg} />
      <Content>
        {name || 'Category Name'}
      </Content>
    </Container>
  );
};

export default CategoryCard;
