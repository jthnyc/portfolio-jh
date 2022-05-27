import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
// import Image from "next/image";
import Link from "next/link";

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  stack: string;
  github: string;
}

const Project = ({ title, description, stack, github }: ProjectDetails) => {
  return (
    <ProjectContainer>
      <ImagePlaceHolder>Image placeholder</ImagePlaceHolder>
      <div>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>{stack}</ProjectStack>
        <Link href={github}>
          <a target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </Link>
      </div>
    </ProjectContainer>
  );
};

export default Project;

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
  width: 120%;
  background-color: lightgrey;
  color: black;
  z-index: 1;
`;

const ProjectStack = styled.p`
  padding: 1rem 1rem;
  height: 4rem;
  background-color: lightblue;
  color: black;
  width: 120%;
`;

const ImagePlaceHolder = styled.div`
  min-width: 35rem;
  height: 20rem;
  background-color: black;
`;
