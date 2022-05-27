import styled from "styled-components";

export default function Contact() {
  return (
    <ContactSection>
      <h1>Let's connect!</h1>
      <ContactButton>
        <a href="emailto:joannathhuang@gmail.com">Say Hello</a>
      </ContactButton>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  height: calc(100vh - 4rem);
  color: #edf5e1;
  padding: 2rem 5rem;
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
