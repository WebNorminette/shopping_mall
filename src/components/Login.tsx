import React, { useState } from "react";
import { styled } from "styled-components";
import { palette } from "../styles/palette";
import { BlackButton, WhiteButton } from "./Button";
import { WhiteSpace } from "./WhiteSpace";

interface User {
  email: string;
  password: string;
}
interface FocusData {
  [index: string]: boolean;
  email: boolean;
  password: boolean;
}
export default function Login() {
  const [loginData, setLoginData] = useState<User>({ email: "", password: "" });
  const [focusData, setFocusData] = useState<FocusData>({ email: false, password: false });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    console.log(!focusData[name]);
    setFocusData({ ...focusData, [name]: !focusData[name] });
  };

  return (
    <StWrapper>
      <StContainer>
        <StTitle>로그인</StTitle>
        <StInputBox>
          <input
            name="email"
            value={loginData.email}
            onChange={onChange}
            onFocus={onFocus}
            placeholder="이메일"
          />
        </StInputBox>
        <StInputBox>
          <input
            name="password"
            value={loginData.password}
            onChange={onChange}
            placeholder="비밀번호"
          />
        </StInputBox>
        <BlackButton content="로그인" disabled={!loginData?.email || !loginData.password} />
        <WhiteSpace height="1rem" />
        <WhiteButton content="비밀번호 찾기" />
      </StContainer>
      <StContainer>
        <StTitle>아직 회원이 아니신가요?</StTitle>
        <WhiteButton content="회원가입 하기" isUseHover />
      </StContainer>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2rem 9rem 10rem;
  box-sizing: border-box;
  gap: 5rem;
  @media screen and (max-width: 1000px) {
    padding: 2rem 5rem 10rem;
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 2rem;
    flex-direction: column;
  }
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
const StTitle = styled.div`
  padding: 4rem 0;
  font-size: 1.25rem;
  font-weight: 700;
`;
const StInputBox = styled.div`
  position: relative;
  padding: 1rem 0;
  & > input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 0.7px solid ${palette.black};
  }
`;
