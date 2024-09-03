"use client";
import React, { useState } from "react";
import { SubServiceItem } from "./SubServiceItem";
import { Container, Section } from "@/components/layouts";
import { useParams } from "next/navigation";

interface SERVICES {
  category: string;
  question: string;
  answer: string;
}

interface SubServiceSectionProps {
  services: SERVICES[];
}

export const SubServiceSec: React.FC<SubServiceSectionProps> = ({
  services,
}) => {
  const params = useParams<{ slug: string }>();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "General", "Pricing", "Dashboard", "API"];

  const filteredSubServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <Section className="bg-white">
      <Container className="mt-[50px]">
        <h2 className="mb-4 text-3xl font-bold capitalize">
          {params.slug} Sub-Services
        </h2>
        <p className="mb-8 text-gray-600">
          These are all the Sub-Services comes under {params.slug}
        </p>

        <div className="mb-8 flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 ${
                selectedCategory === category
                  ? "bg-primary-300 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredSubServices.map((item, index) => (
            <SubServiceItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
