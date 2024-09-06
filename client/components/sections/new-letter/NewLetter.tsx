"use client";
export const NewLetter = () => {
  return (
    <section className="relative rounded-3xl bg-primary-300 py-14">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 flex-1 md:mb-0">
          <img
            src="/images/home.png"
            alt="Modern House"
            className="absolute -top-[50px] h-auto w-[680px] object-cover"
          />
        </div>

        <div className="flex-1 text-center md:pl-8 md:text-left">
          <h2 className="mb-4 text-title font-bold text-black">
            You want professional help?
          </h2>
          <p className="mb-6 text-sub-title text-gray-900  ">
            We have the expert on board to handle the complete job.
          </p>
          <div className="flex flex-col">
            {/* <div className="flex flex-col justify-around md:flex-row">
              <div className="text-center">
              <div className="mb-4">
              <span className="text-5xl text-green-500">🏠</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Residential</h3>
              <p className="text-black">
              Waterproofing made easy with India's leading waterproofing
              expert.
              </p>
              </div>
              <div className="mt-8 text-center md:mt-0">
              <div className="mb-4">
              <span className="text-5xl text-red-500">🏢</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">
              Project - Industrial, Commercial
              </h3>
              <p className="text-black">
              Offering a range of innovative products and solutions for the
                  construction industry.
                  </p>
                  </div>
                  </div> */}
            <div className="flex flex-col justify-start sm:flex-row sm:items-center sm:gap-3">
              <input
                placeholder="Your e-mail"
                className="mb-3 rounded-full px-6 py-3 sm:mb-0 sm:w-[330px]"
              />
              <button className="rounded-full bg-primary-950 px-6 py-3 text-white">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
