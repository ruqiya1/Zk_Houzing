import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, Main, Menu } from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";

const Home = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signin");
  };

  const onClickPro = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logOut") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item data-name="my-profile" onClick={onClickPro}>
        My Properties
      </Menu.Item>
      <Menu.Item data-name="my-properties" onClick={onClickPro}>
        My Properties
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickPro}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logOut" onClick={onClickPro}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")}>
            <Logo />
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="topRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type={"dark"}>
                  <div> Profile</div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type={"dark"}>
                Login
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};
export default Home;
