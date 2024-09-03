"use client";
import React, { useState } from "react";

interface SubServiceItemProps {
  question: string;
  answer: string;
  pricing_range?: string;
}

export const SubServiceItem: React.FC<SubServiceItemProps> = ({
  question,
  answer,
  pricing_range,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

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
          <span className="w-[15%] rounded-2xl bg-primary-300 p-2 px-3 text-center font-semibold text-white">
            {pricing_range}
          </span>
          <div className="flex gap-7">
            <img
              src="/images/stock1.jpg"
              alt="vedant-construction"
              className="h-[230px] w-[30%] rounded-3xl"
            />
            <img
              src="/images/stock2.webp"
              alt="vedant-construction"
              className="h-[230px] w-[30%] rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
