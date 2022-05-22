import styled from "styled-components";
import { device } from "../src/device";
import Image from "next/image";

export const About = () => {
  return (
    <AboutSection>
      <AboutImage>
        <Image
          src="/src/images/profile.png"
          width={500}
          height={500}
          alt="Picture of Joanna Huang"
        />
      </AboutImage>
      <div>
        <h2>About Me</h2>
        <p>
          Hey there! I'm Joanna and I enjoy creating pixel perfect things for
          the web. As a former teacher, I saw there was a gap between how
          educational software was meant to be used and how it's actually used
          in the classroom. Born out of a desire to bridge that gap, I set out
          to hone my skills as a developer and coded my first function to loop
          over an array as part of my application to Flatiron School's Mobile
          Dev Corps to learn iOS Development via Swift.
        </p>
        <p>
          Upon graduation, there was an immediate need at a music education
          startup I previously interned at. As their mission aligned with my
          interests, I transitioned to business development while still coding
          on the side. Fast forward two years later, my aspiration to be a
          better developer prompted me to take a deep dive into full stack web
          development through Fullstack Academy's Grace Hopper program in 2020.
        </p>
        <p>
          I've had the privilege of working at the Born group since the start of
          2021. My main focus at this time is building accessible and bespoke
          digital experiences for our clients.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <TechList>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>SCSS</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>SalesForce Commerce Cloud</li>
          </ul>
        </TechList>
      </div>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  width: 100%;
  color: #edf5e1;
  padding: 0rem;

  & p {
    margin-top: 2rem;
    max-width: 30rem;
    line-height: 1.5rem;
  }

  @media ${device.sm} {
    & p {
      margin-top: 1.5rem;
      max-width: 20rem;
    }
  }
`;

const AboutImage = styled.div`
  border: red;
  min-width: 20%;
`;

const TechList = styled.div`
  margin-top: 1.5rem;
  width: 60%;
  display: flex;

  & ul {
    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    // width: 100%;
    // height: 60%;
  }

  & li {
    flex: 1;
    // width: 50%;
    margin-bottom: 1.125rem;
  }
`;
