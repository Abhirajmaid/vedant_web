"use client";
import { SubServiceSec } from "@/components";
import { servicesData } from "@/data/data";
import { useParams } from "next/navigation";
import React from "react";

interface SERVICES {
  category: string;
  question: string;
  answer: string;
  pricing_range?: string;
  url?: string;
  info?: {
    title: string;
    description: string;
    process: string[];
    benefits: string[];
  };
}

const page = () => {
  const { slug } = useParams();

  const subServices: SERVICES[] =
    servicesData.find((item) => item.id === slug)?.sub_services || [];

  return (
    <div>
      {subServices.length > 0 ? (
        <SubServiceSec services={subServices} />
      ) : (
        <p>No services found</p>
      )}
    </div>
  );
};

export default page;
