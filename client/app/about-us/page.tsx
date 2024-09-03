/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container className="mt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Heading as="h1" className="text-hero">
              About Us
            </Heading>
            <div>
              <p className="mb-4">
                At Flow, we're committed to a sustainable future. As a
                pioneering force in the green energy sector, we've been at the
                forefront of the transition to clean, renewable power sources.
                Our mission is simple yet profound: to create a world where
                energy is not only abundant but also environmentally
                responsible. We believe that by harnessing the power of nature,
                we can power the world and protect it simultaneously.
              </p>
              <Button variant="secondary">Read more</Button>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:h-screen md:grid-cols-4 md:grid-rows-4">
            <div className="col-span-2 row-span-4 grid h-full grid-cols-2 grid-rows-2 gap-4">
              <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src="https://cdn.dribbble.com/userupload/14360068/file/original-ba1ed7bf3a14c47e57943f30b8b7b141.png?resize=1024x768"
                  alt="About us 1"
                  width={450}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-2 grid grid-rows-2  gap-4 md:col-span-1">
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-black p-4 text-white md:col-span-1">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam reprehenderit culpa vero omnis ullam
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-4 grid h-full grid-cols-2 grid-rows-2 gap-4">
              <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl md:row-start-3">
                <Image
                  src="https://cdn.dribbble.com/users/6942141/screenshots/15943214/media/8263cbe0693a7922ece383adcd701991.png?resize=450x338&vertical=center"
                  alt="About us 1"
                  width={450}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-2 grid grid-rows-2  gap-4 md:col-span-1">
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-black p-4 text-white md:col-span-1">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam reprehenderit culpa vero omnis ullam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            our work philosophy
          </Heading>
          <div className="sticky grid gap-4">
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <div className="p-2 !py-0 sm:p-4">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
