import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Link from "next/link";
// import { device } from "../src/device";
// import Project from "./Project";

const projects = [
  {
    title: "YearOne Movie Ratings",
    description: "Single page application to search and rate movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/yo-ratings",
  },
  {
    title: "The Shoppies",
    description: "Single page application to search and nominate top 5 movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/movie-nom-app",
  },
  {
    title: "Wanderlust",
    description:
      "A web app for individuals to book rentals with other travelers.",
    stack:
      "Typescript, NextJS, React, Redux, Sequelize, PostgreSQL, Google Cloud SQL",
    github: "https://github.com/gh-wanderlust/wanderlust",
  },
  {
    title: "LaLaLime",
    description: "An e-commerce site for athletic apparel.",
    stack: "React, Redux, Sequelize, PostgreSQL, Heroku",
    github: "https://github.com/jthnyc/LaLaLime",
  },
];

// interface ProjectDetails {
//   title: string;
//   description: string;
//   stack: string;
//   github: string;
// }

export const Projects = () => {
  return (
    <ProjectSection>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectContainer>
          <ImagePlaceHolder>Image placeholder</ImagePlaceHolder>
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectStack>{project.stack}</ProjectStack>
            <Link href={project.github}>
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </Link>
          </div>
        </ProjectContainer>
      ))}
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  width: 100%;
  color: #edf5e1;
  padding: 0 2rem;

  & h2 {
    margin-bottom: 2rem;
  }
`;

const ProjectContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 25rem;
  display: flex;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  & > a {
    margin: 1rem 1rem;
    transition: all 0.125s ease;
    color: #edf5e1;

    &:hover {
      color: #ff7f11;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2em;
  margin: 1.25rem 0rem;
  display: flex;
`;

const ProjectDescription = styled.p`
  padding: 1.5rem 0.25rem;
  height: 4rem;
  width: 100%;
  background-color: lightgrey;
  color: black;
  z-index: 1;
`;

const ProjectStack = styled.p`
  padding: 1rem 1rem;
  height: 4rem;
  background-color: lightblue;
  color: black;
`;

const ImagePlaceHolder = styled.div`
  min-width: 35rem;
  height: 20rem;
  background-color: black;
`;
