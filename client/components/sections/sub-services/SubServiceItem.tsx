"use client";
import { Button } from "@/components/elements";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

interface SubServiceItemProps {
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

export const SubServiceItem: React.FC<SubServiceItemProps> = ({
  question,
  answer,
  pricing_range,
  url,
  info,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  const params = useParams<{ slug: string }>();

  return (
    <div className="border-b py-4">
      <div
        onClick={toggleFAQ}
        className="flex cursor-pointer items-center justify-between"
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4">
          <p className="mt-2 text-[18px] text-gray-600">{answer}</p>
          <span className="w-full rounded-2xl bg-primary-300 p-2 px-3 text-center font-semibold text-white md:w-[15%]">
            {pricing_range}
          </span>
          <div className="flex justify-between gap-2 md:justify-start md:gap-7">
            <img
              src="/images/stock1.jpg"
              alt="vedant-construction"
              className="h-[230px] w-[48%] rounded-3xl md:w-[30%]"
            />
            <img
              src="/images/stock2.webp"
              alt="vedant-construction"
              className="h-[230px] w-[48%] rounded-3xl md:w-[30%]"
            />
          </div>
          <div className="flex gap-5">
            <Link href="/contact-us">
              <Button variant="secondary" className="text-white">
                Get a Quote
              </Button>
            </Link>
            {info && (
              <Link href={`/services/${params.slug}/${url}`}>
                <Button
                  variant="tetriary-reversed"
                  className="border-black !text-black hover:!border-primary-300 hover:!text-white"
                >
                  Learn More
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
