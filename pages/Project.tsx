import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export const Project = ({ title, description, stack, github }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <Image
        src="https://unsplash.com/photos/OqtafYT5kTw"
        width={300}
        height={200}
      />
      <p>{description}</p>
      <p>{stack}</p>
      <Link href={github}>
        <a>
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </Link>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 19.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 1.25rem;
`;
