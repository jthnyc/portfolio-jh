import styled from "styled-components";
import { Send } from 'react-feather';

export default function Contact() {
  return (
    <ContactSection>
      <h1 id="Contact">Get In Touch</h1>
      <p>Always happy to connect with a fellow coder or musician. Feel free to reach out! </p>
      <a href="mailto:joannathhuang@gmail.com">
        <ContactButton>
          <Send /> 
          <span>Say Hello</span>
        </ContactButton>
      </a>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  max-width: 1000px;
  align-items: center;

  & h1 {
    margin-bottom: 2rem;
  }

  & span, svg {
    color: #edf5e1;
  }
`;

const ContactButton = styled.button`
  width: 12.5rem;
  height: 5rem;
  margin-top: 2rem;
  font-size: 1.3em;
  background: var(--prussianblue);
  border: 1px solid #edf5e1;
  border-radius: 0.5rem;

  &:hover {
    background: #ff7f11;
  }

  & svg {
    position: relative;
    left: -10px;
  }

  & span {
    position: relative;
    top: -5px;
  }
`;
