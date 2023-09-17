import React, { Ref, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as InstargramIcon } from "../../assets/svg/instagramIcon.svg";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

const ICON_SIZE = 12;

const Footer = React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.newsLetterContainer}>
        <p className={styles.title}>newsletter</p>
        <input
          className={styles.input}
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
        />
        <Button content="구독하기" />
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.row}>
          <div className={styles.itemBox}>contact</div>
          <div className={styles.itemBox} onClick={() => navigation("/account")}>
            account
          </div>
          <div className={styles.itemBox}>legal</div>
        </div>

        <InstargramIcon className={styles.instaIcon} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.row}>
          <div className={styles.itemBox}>features</div>
          <div className={styles.itemBox}>chapters</div>
          <div className={styles.itemBox}>country</div>
        </div>
        <div className={styles.name}>ⓒ 2023 stussy</div>
      </div>
      <div className={styles.bottomText}>
        코리아트라이브 유한회사 | 대표 BAIK KYUHEE | 사업자등록번호 561-87-00715 | 서울특별시 강남구
        대치동 942 해성빌딩 | 통신판매신고번호 제 2018 - 서울서초 - 0860 호 [사업자정보]
      </div>
    </div>
  );
});

export default Footer;
