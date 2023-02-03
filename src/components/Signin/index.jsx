import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Successfully logged in");
  };
  // const warning = () => {
  //   message.info("Something went wrong");
  // };

  const onSubmit = async () => {
    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then(
      (res) => {
        // if (res?.authenticationToken) {
        //   navigate("/home");
        //   localStorage.setItem("token", res?.authenticationToken);
        //   info();
        //   console.log(res, "bu success loged in");
        // }
        // else {
        //   message.warning('Something went wrong')
        //   // console.log(res===SyntaxError && "bu resning errori", "buresningerrori")
        //   console.log("error chqdi");
        // }
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
          info();
        } else {
          // message.warning('Something went wrong')
          console.log("error chiqdi");
        }
      }
    );
  };

  return (
    <Content>
      <div className="subTitle">Sign In</div>
      <Input onChange={onChange} type="email" placeholder="email" />
      <Input onChange={onChange} type="password" placeholder="password" />
      <Button width="%" onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default Signin;
