import styled from "styled-components";

export default function Contact() {
  return (
    <ContactSection>
      <h1 id="Contact">Let's connect!</h1>
      <ContactButton>
        <a href="emailto:joannathhuang@gmail.com">Say Hello</a>
      </ContactButton>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  max-width: 1000px;
  align-items: center;
`;

const ContactButton = styled.button`
  width: 200px;
  height: 80px;
  margin-top: 2rem;
  font-size: 1.3em;
  & a {
    color: black;
  }
`;
