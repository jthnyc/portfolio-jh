import Link from "next/link";
import styled from "styled-components";
import { device } from "../device";

export default function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <a>繁</a>
      </Link>
      <Link href="#About">
        <a>About</a>
      </Link>
      <Link href="#Projects">
        <a>Projects</a>
      </Link>
      <Link href="#Contact">
        <a>Contact</a>
      </Link>
      <Link href="https://drive.google.com/file/d/1FZEw2C4qzf7d_fnoT67i98MGjfrASFDX/view?usp=sharing">
        <a target="_blank" rel="noreferrer noopener">
          Resume
        </a>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: #fafafa;
  padding: 0.5rem 0.75rem 0.5rem 2rem;
  position: fixed;
  z-index: 10;

  & > a {
    margin: 0.5rem 0.5rem;
    text-decoration: none;
    padding: 0.75rem 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    border: none;
    transition: all 0.125s ease;
    font-size: 0.875rem;
    color: black;

    &:hover {
      color: blue;
    }

    &:first-child {
      position: absolute;
      left: 0.9375rem;
      top: 0.3125rem;
      font-size: 1.125rem;
    }
  }

  @media ${device.sm} {
    flex-direction: column;
    order: 1;

    &:first-child {
      position: relative;
      font-size: 0.85rem;
      order: 2;
    }
  }
`;
