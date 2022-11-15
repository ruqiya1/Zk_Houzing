import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link } from "./style";
import { navbar } from "../../utils/navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")}>
          <Logo />
        </Section>
        <Section>
          {navbar.map(({ title, path}, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Login</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
export default Home;
