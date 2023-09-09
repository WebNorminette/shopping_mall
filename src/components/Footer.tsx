import { useState } from "react";
import { styled } from "styled-components";

import { ReactComponent as InstargramIcon } from "@assets/svg/instagramIcon.svg";
import { palette } from "@styles/palette";

const ICON_SIZE = 12;
const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <StFooterWrapper>
      <StNewsLetterContainer>
        <StTitle>newsletter</StTitle>
        <StTextInput
          name="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StSubscribeButton>구독하기</StSubscribeButton>
      </StNewsLetterContainer>
      <StButtonContainer>
        <StRow>
          <StFooterButtonItem>contact</StFooterButtonItem>
          <StFooterButtonItem>account</StFooterButtonItem>
          <StFooterButtonItem>legal</StFooterButtonItem>
        </StRow>
        <InstargramIcon width={ICON_SIZE} height={ICON_SIZE} />
      </StButtonContainer>
      <StButtonContainer>
        <StRow>
          <StFooterButtonItem>features</StFooterButtonItem>
          <StFooterButtonItem>chapters</StFooterButtonItem>
          <StFooterButtonItem>country</StFooterButtonItem>
        </StRow>
        <StSmallName>ⓒ 2023 stussy </StSmallName>
      </StButtonContainer>
      <StBottomText>
        코리아트라이브 유한회사 | 대표 | 사업자등록번호 | 서울특별시 주소주소주소
      </StBottomText>
    </StFooterWrapper>
  );
};

const StRow = styled.div`
  display: flex;
`;

const StFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const StNewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-top: 0.5px solid ${palette.lightGray};
`;
const StTitle = styled.div`
  padding-top: 0.3rem;
  font-size: 0.6rem;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
`;
const StTextInput = styled.input`
  padding: 0.5rem 0;
  font-size: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 0.5px solid ${palette.lightGray};
`;
const StSubscribeButton = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  margin-top: 0.3rem;
  background-color: ${palette.black};
  color: ${palette.white};
  font-size: 0.5rem;
  font-weight: 600;
`;

const StButtonContainer = styled(StRow)`
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid ${palette.lightGray};
  padding: 0 1rem;
`;

const StFooterButtonItem = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 10rem;
  padding: 0.5rem 0;
  font-size: 0.725rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const StSmallName = styled.div`
  font-size: 0.6rem;
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const StBottomText = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-top: 0.5px solid ${palette.lightGray};
  font-size: 0.5rem;
`;

export default Footer;
