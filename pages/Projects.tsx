import styled from "styled-components";
// import { device } from "../src/device";
import Project from "./Project";

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

interface ProjectDetails {
  title: string;
  description: string;
  stack: string;
  github: string;
}

export const Projects = (prop: ProjectDetails) => {
  return (
    <ProjectSection>
      <h2>Projects</h2>
      {projects.forEach((project) => (
        <Project title={project.title} />
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
