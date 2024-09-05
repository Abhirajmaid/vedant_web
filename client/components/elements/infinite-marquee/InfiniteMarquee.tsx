"use client";
import React from "react";
import Marquee from "react-fast-marquee";

// Define the props type
interface InfiniteMarqueeProps {
  txt: string;
  deg: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ txt, deg }) => {
  return (
    <>
      <div
        className={`w-[100%] md:w-[120%] ${deg} mt-6 bg-primary-50 text-white`}
      >
        <Marquee>
          <div className="flex items-center justify-between gap-[115px] text-[40px] font-bold md:text-[60px]">
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span className="mr-[115px]">{txt}</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default InfiniteMarquee;
