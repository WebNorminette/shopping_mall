import { styled } from "styled-components";
import { palette } from "../styles/palette";

interface ButtonProps {
  content: string;
  type?: string;
  onClick?: any;
  disabled?: boolean;
}

export const BlackButton = ({ content, onClick, disabled = false }: ButtonProps) => {
  return (
    <StBlackButton onClick={onClick} disabled={disabled}>
      {content}
    </StBlackButton>
  );
};

export const WhiteButton = ({ content, onClick, disabled = false }: ButtonProps) => {
  return (
    <StWhiteButton onClick={onClick} disabled={disabled}>
      {content}
    </StWhiteButton>
  );
};

const StBlackButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.7rem 0;
  margin-top: 0.3rem;
  border: 1px solid ${(props) => (props.disabled ? palette.darkGray : palette.black)};
  background-color: ${(props) => (props.disabled ? palette.lightGray : palette.black)};
  color: ${(props) => (props.disabled ? palette.darkGray : palette.white)};
  font-size: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${palette.darkGray};
    color: ${palette.white};
    border: 1px solid ${palette.darkGray};
  }
`;

const StWhiteButton = styled(StBlackButton)`
  border: 1px solid ${(props) => (props.disabled ? palette.darkGray : palette.black)};
  background-color: ${(props) => (props.disabled ? palette.lightGray : palette.white)};
  color: ${(props) => (props.disabled ? palette.darkGray : palette.black)};
  border: 1px solid ${palette.black};
`;
