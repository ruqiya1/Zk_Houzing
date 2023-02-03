import React from "react";
import { AntTabs, Container } from "./style";
import Signin from "../Signin";
import Signup from "../Signup";

const Register = () => {
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            label: `Sign In`,
            key: "1",
            children: <Signin />,
          },
          {
            label: `Sign Up`,
            key: "2",
            children: <Signup />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
