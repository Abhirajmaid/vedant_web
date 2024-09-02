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
              Our Services
            </Heading>
          </div>
          <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map((item, id) => {
              return (
                <div className="flex flex-col items-start gap-6" key={id}>
                  <div className="rounded-xl bg-primary-300 p-4">
                    <Icon icon={item.icon} width="2em" height="2em" />
                  </div>
                  <div>
                    <Heading as="h3" className="mb-4 text-title leading-none">
                      {item.title}
                    </Heading>
                    <p className="text-neutral-800">{item.description}</p>
                  </div>
                  <Link href={item.url}>
                    <button className="text-primary-950">Read More</button>
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
