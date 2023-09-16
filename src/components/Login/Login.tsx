import React, { useState } from "react";
import { ReactComponent as GoogleIcon } from "../../assets/svg/googleIcon.svg";
import { ReactComponent as KaKaoIcon } from "../../assets/svg/kakaoIcon.svg";
import Button from "../Button/Button";
import WhiteSpace from "../WhiteSpace";

import styles from "./Login.module.css";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<User>({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>로그인</p>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            name="email"
            value={loginData.email}
            onChange={onChange}
          />
          <label className={styles.label}>이메일</label>
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            name="password"
            value={loginData.password}
            onChange={onChange}
          />
          <label className={styles.label}>비밀번호</label>
        </div>
        <div className={styles.iconBox}>
          <GoogleIcon />
          <KaKaoIcon />
        </div>
        <Button content="로그인" disabled={!loginData?.email || !loginData.password} />
        <WhiteSpace height="1rem" />
        <Button content="비밀번호 찾기" type="white" />
      </div>
      <div className={styles.container}>
        <p className={styles.title}>아직 회원이 아니신가요?</p>
        <Button content="회원가입 하기" isUseHover type="white" />
      </div>
    </div>
  );
}
