import { Button } from "@/components/elements";
import React from "react";

type ProjectCardProps = {
  number: string;
  projectName: string;
  projectType: string;
  description: string;
  location: string;
  duration: string;
  image: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  projectName,
  projectType,
  description,
  location,
  duration,
  image,
}) => {
  return (
    <div className="flex w-full items-center gap-10 rounded-2xl bg-primary-50 p-6">
      <div className="my-8 flex w-[55%] flex-col items-start gap-7 md:flex-row">
        <div className="flex-shrink-0">
          <span className="text-6xl font-bold text-primary-300 ">{number}</span>
        </div>
        <div className="">
          <h3 className="mb-2 text-3xl font-bold text-white">{projectName}</h3>
          <p className="mb-1 text-sm text-gray-100">
            Project Type: {projectType}
          </p>
          <p className="mb-1 text-sm text-gray-300">Location: {location}</p>
          <p className="mb-1 text-sm text-gray-300">Duration: {duration}</p>
          <p className="mb-4 w-[80%] text-gray-100">{description}</p>
          <Button variant="secondary">See More</Button>
        </div>
      </div>
      <img
        className="mt-4 h-[350px] w-[40%] rounded-xl object-cover md:ml-6 md:mt-0"
        src={image}
        alt={projectName}
      />
    </div>
  );
};
