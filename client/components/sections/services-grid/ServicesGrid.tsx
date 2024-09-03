import { Container, Section } from "@/components/layouts";
import { servicesData } from "@/data/data";
import Link from "next/link";
import React from "react";
import { PageHeader } from "../page-header";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ServicesGrid = () => {
  return (
    <Section className="rounded-b-xl bg-white">
      <Container className="mt-[50px]">
        <PageHeader
          title="Our Services"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
            eum in aspernatur, placeat saepe aut quidem sit sunt officia iure"
          textColor="black"
        />
        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <Link
              href={`/services${service.url}`}
              key={index}
              className="gap-4 rounded-xl p-6 shadow-lg"
            >
              <div className="mb-3 flex h-auto w-[12%] items-center justify-center rounded-xl bg-primary-300 p-4">
                <Icon icon={service.icon} width="2em" height="2em" />
              </div>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-2 text-gray-800 ">{service.description}</p>
              <div className="mt-4 inline-block text-primary-300">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
