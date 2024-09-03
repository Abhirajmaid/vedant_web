import {
  Container,
  Heading,
  Renewable,
  SaveEnergy,
  Section,
  SubTitle,
  User,
} from "@/components";
import { Construction } from "@/components/elements/icons/Construction";

export const Metrics = () => {
  return (
    <Section className="relative rounded-3xl bg-[#FFF7ED]">
      <div className="absolute -left-[1080px] top-0 h-full w-full opacity-20">
        <Construction />
      </div>
      <div className="absolute -right-[1100px] top-0 h-full w-full opacity-20">
        <Construction />
      </div>
      <Container>
        <SubTitle subTitle="Metrics" className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              What numbers say!
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-primary-300 p-8">
              <User />
              <div className="flex flex-col gap-6">
                <Heading as="h3" className="text-title leading-none">
                  70+
                </Heading>
                <Heading as="h4" className="text-title">
                  Happy Clients Serviced
                </Heading>
                <h4 className="text-sub-title leading-none">
                  Showcasing the Joy and Satisfaction of Our Valued Clients.
                </h4>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex gap-6 rounded-3xl bg-primary-300 p-8">
                <Renewable />
                <div>
                  <Heading as="h3" className="text-title leading-none">
                    50+
                  </Heading>
                  <h4 className="mt-4 text-sub-title leading-none">
                    Complete Projects.
                  </h4>
                </div>
              </div>
              <div className="flex gap-6 rounded-3xl bg-primary-300 p-8">
                <SaveEnergy />
                <div>
                  <Heading as="h3" className="text-title leading-none">
                    5 & 25
                  </Heading>
                  <Heading as="h4" className="mt-4 text-sub-title leading-none">
                    Running & Bookings Projects.
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
