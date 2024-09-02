"use client";

import { heroImages } from "@/data/data";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousel() {
  return (
    <Carousel
      swipeable
      stopOnHover
      showStatus={false}
      interval={6000}
      showArrows={false}
      useKeyboardArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      centerSlidePercentage={90}
      className="h-full cursor-grabbing"
    >
      {heroImages.map((item, id) => {
        return (
          <div className="h-[450px] w-full sm:h-[700px]" key={id}>
            <Image
              src={item.url}
              alt="About Us Image"
              width={420}
              className="h-full w-full rounded-3xl object-cover"
              height={530}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default AboutUsCarousel;
