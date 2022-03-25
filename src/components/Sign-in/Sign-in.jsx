import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth-actions";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  SigninContainer,
  Text,
} from "./Sign-in.Elements";

const Sign_In = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const emailRef = useRef();
  const passWordRef = useRef();

  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (event) => {
    const element = event.target;
    const { value, name } = element;
    setUser({
      ...user, // copy lại state cũ trước đó
      [name]: value, //Cập nhật lại state  //object litteral
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(user, history));
  };

  return (
    <>
      <SigninContainer>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <FormWrap>
          <Icon to="/">Greenwich</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleLogin}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="emailAddress"
                required
                htmlFor="for"
                name="emailAddress"
                onChange={handleChange}
                ref={emailRef}
                id="emailAddress"
              />
              <FormLabel>Password</FormLabel>
              <FormInput
                type="password"
                htmlFor="for"
                name="password"
                onChange={handleChange}
                ref={passWordRef}
                id="password"
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </SigninContainer>
    </>
  );
};

export default Sign_In;
