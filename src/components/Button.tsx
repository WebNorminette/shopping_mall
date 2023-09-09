import React from "react";
import { styled } from "styled-components";
import { palette } from "../styles/palette";

type ButtonProps = {
  content: string;
  type: string;
  onClick: any;
};

const Button = ({ content, type = "black", onClick }: ButtonProps): React.ReactElement => {
  const backgroundColor = type;
  return <StSubscribeButton onClick={onClick}>{content}</StSubscribeButton>;
};

const StSubscribeButton = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  margin-top: 0.3rem;
  background-color: ${palette.black};
  color: ${palette.white};
  font-size: 0.5rem;
  font-weight: 600;
`;

export default Button;
