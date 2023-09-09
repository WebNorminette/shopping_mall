import { palette } from "@styles/palette";
import React from "react";
import { styled } from "styled-components";

type ButtonProps = {
  content: string;
  type: string;
};

const Button = ({ content, type }: ButtonProps): React.ReactElement => {
  return <div></div>;
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
