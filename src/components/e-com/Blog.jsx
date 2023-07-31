import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-image: url("../../../public/ProductsBlog-banner.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
  margin-top: 50px;
`;

const Desc = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
  color: white;
  ${mobile({ textAlign: "center" })}

`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  background-color: #435834;
  color: white;
  cursor: pointer;
`;

const Blog = () => {
  return (
    <Container>
      <Title>Looking for more inspiration?</Title>
      <Desc>CHECK OUT OUR BLOG FOR THE LATEST STORIES!</Desc>
      <Button>Head out to our blog</Button>
    </Container>
  );
};

export default Blog;