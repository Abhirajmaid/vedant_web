import { Container, Ev, Heading, Section, SubTitle } from "@/components";

const SolutionData = [
  {
    heading: "",
    description: "",
  },
];

export const Features = () => {
  return (
    <Section className="rounded-3xl bg-[#FFF7ED]">
      <Container>
        <SubTitle subTitle="Solutions" className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none"></Heading>
          </div>
          <div className="grid gap-8 md:grid-cols-2  xl:grid-cols-4">
            <div className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <Heading as="h3" className="mb-4 text-title leading-none">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <Heading as="h3" className="mb-4 text-title leading-none">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <Heading as="h3" className="mb-4 text-title leading-none">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <Heading as="h3" className="mb-4 text-title leading-none">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
