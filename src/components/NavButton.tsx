import styled from "styled-components";

const NavButtonWrapper = styled.button`
  color: teal;
  font-size: 2em;
`;

interface NavButtonProps {
  text: string;
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const NavButton = (props: NavButtonProps) => {
  return (
    <NavButtonWrapper onClick={props.click}>{props.text}</NavButtonWrapper>
  );
};

export default NavButton;
