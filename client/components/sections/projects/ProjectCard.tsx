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
    <div className="flex w-full flex-col-reverse items-center gap-10 rounded-3xl bg-primary-50 p-4 sm:p-6 md:flex-row">
      <div className="my-4 flex w-[90%] flex-col items-start gap-7 md:my-8 md:w-[55%] md:flex-row">
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
          <p className="mb-4 w-full text-gray-100 md:w-[80%]">{description}</p>
          <Button variant="secondary">See More</Button>
        </div>
      </div>
      <img
        className="h-[350px] w-full rounded-xl object-cover md:ml-6 md:w-[40%]"
        src={image}
        alt={projectName}
      />
    </div>
  );
};
