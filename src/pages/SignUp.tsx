import logo from "assets/image/logo.svg";
import logo2 from "assets/image/logo2.svg";
import background3 from "assets/image/./Background3.svg";
import background4 from "assets/image/./Background4.svg";
import pwcheck from "assets/image/./password_check.svg";
import pwcheck2 from "assets/image/./password_check2.svg";
import checkbox from "assets/image/./checkbox.svg";
import styled from "styled-components";
import { useState } from "react";

function SignUp() {
  const [eye, setEye] = useState(false);
  const GenderName = ["남자", "여자", "기타"];

  return (
    <Box>
      <Back3 src={background3} />
      <Back4 src={background4} />
      <Wrapper>
        <Logo src={logo} />
        <Logo2 src={logo2} />
        <FormWrapper>
          <Signup>SIGNUP</Signup>
          <InputWrapper>
            <InputTypeWrapper>
              <Nickname>NICK NAME</Nickname>
              <NicknameForm />
              <Email>E-MAIL</Email>
              <EmailForm />
              <Password>PASSWORD</Password>

              <Pwcheck>
                <img
                  onClick={() => setEye(!eye)}
                  src={eye ? pwcheck2 : pwcheck}
                  alt=""
                />
              </Pwcheck>

              <PwdForm />
              <Gender>GENDER</Gender>
            </InputTypeWrapper>
            <CheckboxForm>
              {GenderName.map((v) => {
                return (
                  <CheckboxWrapper>
                    <Checkbox src={checkbox} />
                    <GenderForm>
                      <b>{v}</b>
                    </GenderForm>
                  </CheckboxWrapper>
                );
              })}
            </CheckboxForm>
            <LoginBtnForm>
              <LoginBtn>SIGNUP</LoginBtn>
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
  z-index: 1;
`;
const Logo2 = styled.img`
  width: 40%;
  height: 570px;
  margin: 20px 0px 0px -35px;
  z-index: 1;
`;
const Back3 = styled.img`
  width: 100%;
  height: 65%;
  position: absolute;
  top: 0px;
  right: 0px;
`;
const Back4 = styled.img`
  width: 70%;
  height: 30%;
  position: absolute;
  bottom: 0px;
  left: 0px;
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

const Signup = styled.div`
  font-size: 50px;
  margin-top: 45px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
const Nickname = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 10px;
`;
const NicknameForm = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
  line-height: 25px;
`;
const Email = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 10px;
`;
const EmailForm = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
  line-height: 25px;
`;
const Password = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 10px;
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
const Gender = styled.div`
  font-size: 25px;
  color: #757186;
  margin-bottom: 25px;
  margin-top: 10px;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Checkbox = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const GenderForm = styled.span`
  font-size: 15px;
  color: #757186;
`;
const CheckboxForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

const FormWrapper = styled.div`
  margin: 20px 150px 0px 150px;
  width: 550px;
  z-index: 1;
`;
const InputWrapper = styled.div``;

const InputTypeWrapper = styled.div`
  margin-bottom: 10px;
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
  margin-top: 25px;
  font-weight: 700;
`;
const LoginBtnForm = styled.div`
  display: flex;
  justify-content: center;
`;

export default SignUp;
