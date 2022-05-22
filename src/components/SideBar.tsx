import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { device } from "../device";

export default function Navbar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <Link href="https://github.com/jthnyc">
          <a>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/joannathhuang/">
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href="mailto:joannathhuang@gmail.com">
          <a>
            <FontAwesomeIcon icon={faAt} />
          </a>
        </Link>
      </SidebarList>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 4.5rem;
  position: fixed;
  left: 1.25rem;
  right: auto;
  bottom: 0;
  z-index: 10;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &::after {
    content: "";
    display: block;
    width: 0.0625rem;
    height: 5.625rem;
    margin: 0 auto;
    background-color: #edf5e1;
    margin-top: 0.765rem;
  }

  & > a {
    margin: 0.5rem 0.5rem;
    transition: all 0.125s ease;
    color: #edf5e1;

    &:hover {
      color: #ff7f11;
    }
  }

  @media ${device.sm} {
    display: none;
  }
`;
