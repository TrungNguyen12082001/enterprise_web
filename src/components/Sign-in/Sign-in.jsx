import React from "react";
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
  return (
    <>
      <SigninContainer>
        <FormWrap>
          <Icon to="/">Greenwich</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
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
