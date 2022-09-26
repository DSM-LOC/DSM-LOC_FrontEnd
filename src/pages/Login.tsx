import logo from "assets/image/logo.svg";
import logo3 from "assets/image/logo3.svg";
import background from "assets/image/./Background1.svg";
import background2 from "assets/image/./Background2.svg";
import pwcheck from "assets/image/./password_check.svg";
import pwcheck2 from "assets/image/./password_check2.svg";
import styled from "styled-components";
import { useState } from "react";

function LoginPage() {
  const [eye, setEye] = useState(false);

  return (
    <Box>
      <Back src={background} />
      <Back2 src={background2} />
      <Wrapper>
        <Logo src={logo} />
        <Logo3 src={logo3} />
        <FormWrapper>
          <Login>LOGIN</Login>
          <InputWrapper>
            <InputTypeWrapper>
              <Email>E-MAIL</Email>
              <EmailForm />
            </InputTypeWrapper>
            <InputTypeWrapper>
              <Password>PASSWORD</Password>
              <Pwcheck>
                <img
                  onClick={() => setEye(!eye)}
                  src={eye ? pwcheck2 : pwcheck}
                  alt=""
                />
              </Pwcheck>
              <PwdForm />
            </InputTypeWrapper>
            <LoginBtnForm>
              <LoginBtn>LOGIN</LoginBtn>
            </LoginBtnForm>
          </InputWrapper>
        </FormWrapper>
      </Wrapper>
    </Box>
  );
}

const Logo = styled.img`
  height: 80px;
  margin: 30px 0px 0px 30px;
`;
const Logo3 = styled.img`
  width: 40%;
  margin: 20px 0px 0px -35px;
  z-index: 1;
`;
const Back = styled.img`
  width: 100%;
  height: 65%;
  position: absolute;
  bottom: 0px;
`;
const Back2 = styled.img`
  width: 70%;
  height: 30%;
  position: absolute;
  top: 0px;
  right: 0px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: white;
  width: 80%;
  height: 80%;
  border-radius: 20px;
`;
const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a5e4f2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = styled.div`
  font-size: 50px;
  margin-top: 65px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
const Email = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 25px;
`;
const EmailForm = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  height: 20px;
  line-height: 25px;
`;
const Password = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 25px;
`;
const PwdForm = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  height: 20px;
  line-height: 25px;
`;
const Pwcheck = styled.div`
  position: relative;
  > img {
    width: 25px;
    position: absolute;
    cursor: pointer;
    right: 0px;
  }
`;

const FormWrapper = styled.div`
  margin: 0px 150px 0px 150px;
  width: 550px;
  z-index: 1;
`;

const InputWrapper = styled.div``;

const InputTypeWrapper = styled.div`
  margin-bottom: 70px;
  font-weight: 500;
`;

const LoginBtn = styled.button`
  background-color: #6db6da;
  border-radius: 10px;
  width: 96%;
  height: 55px;
  border: none;
  color: white;
  font-size: 25px;
  font-weight: 700;
`;
const LoginBtnForm = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export default LoginPage;
