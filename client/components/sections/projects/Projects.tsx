import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Container, Section } from "@/components/layouts";
import { PageHeader } from "../page-header";
import { projectData } from "@/data/data";

export const Projects: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container className="mt-[50px]">
        <PageHeader
          title="Our Projects"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
        eum in aspernatur, placeat saepe aut quidem sit sunt officia iure"
          textColor="black"
        />
        <div className="mt-10 flex flex-col gap-10">
          {projectData.map((project) => (
            <ProjectCard
              key={project.number} // It's good practice to add a unique key when rendering lists
              number={project.number}
              projectName={project.projectName}
              projectType={project.projectType}
              description={project.description}
              location={project.location}
              duration={project.duration}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
