import styled from "styled-components";
import Project, { ProjectDetails } from "./Project";

const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "YearOne Movie Ratings",
    description: "Single page application to search and rate movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/yo-ratings",
  },
  {
    id: 2,
    title: "The Shoppies",
    description: "Single page application to search and nominate top 5 movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/movie-nom-app",
  },
  {
    id: 3,
    title: "Wanderlust",
    description:
      "A web app for individuals to book rentals with other travelers.",
    stack:
      "Typescript, NextJS, React, Redux, Sequelize, PostgreSQL, Google Cloud SQL",
    github: "https://github.com/gh-wanderlust/wanderlust",
  },
  {
    id: 4,
    title: "LaLaLime",
    description: "An e-commerce site for athletic apparel.",
    stack: "React, Redux, Sequelize, PostgreSQL, Heroku",
    github: "https://github.com/jthnyc/LaLaLime",
  },
];

export const Projects = () => {
  return (
    <ProjectSection>
      <h2>Projects</h2>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
  display: flex;
  min-height: 80vh;
  width: 100%;
  color: #edf5e1;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1000px;

  & h2 {
    margin-bottom: 2rem;
  }
`;

const ProjectsContainer = styled.div``;

// const ProjectContainer = styled.div`
//   border: 1px solid red;
//   width: 100%;
//   height: 25rem;
//   display: flex;

//   &:nth-child(odd) {
//     flex-direction: row-reverse;
//   }

//   & > a {
//     margin: 1rem 1rem;
//     transition: all 0.125s ease;
//     color: #edf5e1;

//     &:hover {
//       color: #ff7f11;
//     }
//   }
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.2em;
//   margin: 1.25rem 0rem;
//   display: flex;
// `;

// const ProjectDescription = styled.p`
//   padding: 1.5rem 0.25rem;
//   height: 4rem;
//   width: 120%;
//   background-color: lightgrey;
//   color: black;
//   z-index: 1;
// `;

// const ProjectStack = styled.p`
//   padding: 1rem 1rem;
//   height: 4rem;
//   background-color: lightblue;
//   color: black;
//   width: 120%;
// `;

// const ImagePlaceHolder = styled.div`
//   min-width: 35rem;
//   height: 20rem;
//   background-color: black;
// `;
