import { styled } from "styled-components";

interface WhiteSpaceProps {
  width?: string;
  height?: string;
}

export const WhiteSpace = ({ width = "100%", height = "100%" }: WhiteSpaceProps) => {
  return <StWhiteSpace width={width} height={height} />;
};

const StWhiteSpace = styled.div<WhiteSpaceProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
