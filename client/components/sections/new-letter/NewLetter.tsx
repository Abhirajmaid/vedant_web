"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

export const NewLetter = () => {
  return (
    <section className="relative rounded-3xl bg-primary-300 px-6 py-14">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 hidden flex-1 md:mb-0 md:block">
          <img
            src="/images/home.png"
            alt="Modern House"
            className="absolute -top-[30px] h-auto w-[780px] object-cover"
          />
        </div>

        <div className="flex-1 justify-center text-center md:pl-8 md:text-left">
          <h2 className="mb-4 text-center text-title font-bold text-black">
            You want professional help?
          </h2>
          <p className="mb-6 text-center text-sub-title text-gray-900">
            We have the expert on board to handle the complete job.
          </p>
          <div className="mx-auto flex w-[50%] flex-col justify-between gap-10 md:flex-row">
            <div className="text-center">
              <div className="flex items-center gap-3">
                <Icon
                  icon="material-symbols:home"
                  width="1.2em"
                  height="1.2em"
                  className="h-12 w-12"
                />
                <h3 className="text-xl font-bold">Residential</h3>
              </div>
              {/* <p className="mx-auto w-[55%] text-black">
                  Waterproofing made easy with India's leading waterproofing
                  expert.
                </p> */}
              <button className="mt-5 rounded-full bg-primary-950 px-6 py-3 text-white">
                Get in touch
              </button>
            </div>
            <div className="mt-8 text-center md:mt-0">
              <div className="flex items-center gap-3">
                <Icon
                  icon="clarity:building-solid"
                  width="1.2em"
                  height="1.2em"
                  className="h-12 w-12"
                />
                <h3 className="text-xl font-bold">Commercial</h3>
              </div>
              {/* <p className="mx-auto w-[55%] text-black">
                  Offering a range of innovative products and solutions for the
                  construction industry.
                </p> */}
              <button className="mt-5 rounded-full bg-primary-950 px-6 py-3 text-white">
                Get in touch
              </button>
            </div>
          </div>
          {/* <div className="flex flex-col justify-start sm:flex-row sm:items-center sm:gap-3">
              <input
                placeholder="Your e-mail"
                className="mb-3 rounded-full px-6 py-3 sm:mb-0 sm:w-[330px]"
              />
              <button className="rounded-full bg-primary-950 px-6 py-3 text-white">
                Get in touch
              </button>
            </div> */}
        </div>
      </div>
    </section>
  );
};
