"use client";
import React, { useState } from "react";

interface SubServiceItemProps {
  question: string;
  answer: string;
}

export const SubServiceItem: React.FC<SubServiceItemProps> = ({
  question,
  answer,
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
        <p className="mt-2 text-gray-600">
          {answer} <br /> <span></span>
        </p>
      )}
    </div>
  );
};
