import {
  Button,
  Container,
  Ev,
  Heading,
  Section,
  SubTitle,
} from "@/components";
import { servicesData } from "@/data/data";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const Features = () => {
  return (
    <Section className="rounded-3xl bg-[#FFF7ED]">
      <Container>
        {/* <SubTitle subTitle="services" className="text-primary-950" /> */}
        <div className="flex flex-col">
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              Our Services
            </Heading>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map((item, id) => {
              return (
                <Link
                  href={`/services/${item.url}`}
                  className="relative flex h-[450px] w-full flex-col items-start gap-6 overflow-hidden rounded-3xl transition-all hover:scale-[1.03]"
                  key={id}
                >
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt="vedant construction"
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                  <div className="relative flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-black/70 p-4 text-white">
                    <Heading
                      as="h3"
                      className="mb-4 text-[28px] font-semibold leading-none"
                    >
                      {item.title}
                    </Heading>
                    <Link href={`/services/${item.url}`}>
                      <Button
                        variant="primary"
                        className="!p-0 text-primary-300 hover:bg-transparent"
                      >
                        Learn More &rarr;
                      </Button>
                    </Link>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            href="/services"
            className="mx-auto mt-10 flex w-full items-center justify-center"
          >
            <Button
              variant="tetriary-reversed"
              className="border-black !text-black hover:bg-transparent"
            >
              See all
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
