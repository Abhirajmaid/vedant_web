import { Container, Ev, Heading, Section, SubTitle } from "@/components";
import { servicesData } from "@/data/data";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const Features = () => {
  return (
    <Section className="rounded-3xl bg-[#FFF7ED]">
      <Container>
        <SubTitle subTitle="services" className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              What We Offer
            </Heading>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map((item, id) => {
              return (
                <div
                  className="flex w-full flex-col items-start gap-6 rounded-3xl"
                  key={id}
                >
                  <div className="rounded-xl bg-primary-300 p-4">
                    <Icon icon={item.icon} width="2em" height="2em" />
                  </div>
                  <div>
                    <Heading as="h3" className="mb-4 text-title leading-none">
                      {item.title}
                    </Heading>
                    <p className="w-[90%] text-justify text-neutral-800">
                      {item.description}
                    </p>
                  </div>
                  <Link href={item.url}>
                    <button className="text-primary-600">Read More</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
