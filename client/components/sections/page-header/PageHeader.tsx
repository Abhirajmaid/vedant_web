import { Heading } from "@/components/elements";
import React from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  textColor?: string;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, subtitle, textColor } = props;
  return (
    <>
      <div className={`text-${textColor}`}>
        <Heading as="h1" className="text-hero leading-none">
          {title}
        </Heading>
        <p className="mt-6 max-w-md">{subtitle}</p>
      </div>
    </>
  );
};
