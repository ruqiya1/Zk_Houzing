import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

const Signup = () => {
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

  const onSubmit = async () => {
    request({
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      navigate("/signin");
      console.log(res, "res malumot");

      info();
    });
  };

  return (
    <Content>
      <div className="subTitle">Sign Up</div>
      <Input onChange={onChange} type="email" placeholder="email" />
      <Input onChange={onChange} type="text" placeholder="firstname" />
      <Input onChange={onChange} type="text" placeholder="lastname" />
      <Input onChange={onChange} type="password" placeholder="password" />
      <Button width="%" onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default Signup;
