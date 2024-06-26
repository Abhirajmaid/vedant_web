import {
  Button,
  Check,
  Container,
  Heading,
  Section,
  SubTitle,
} from "@/components";
import AboutUsCarousel from "./AboutUsCarousel";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="About us" />
        <div className="grid gap-12 md:gap-36 xl:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
              Committed to a Building Excellence!
            </Heading>
            <p className="text-white">
              At Vedant Construction, we specialize in transforming visions into
              reality with over 12 years of expertise in both residential and
              commercial construction. Our commitment to excellence is reflected
              in every project we undertake, fostering long-term relationships
              with our clients and providers. We prioritize delivering
              comprehensive, professional, and efficient services while
              continuously upgrading and training our staff. Dedicated to social
              responsibility, we actively contribute to the community, ensuring
              our growth benefits everyone we touch. Trust Vedant Construction
              to build your dreams and shape your future.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-7 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-white">
                <Check />
                Long-Term Relationships: Building lasting connections with
                clients and providers.
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Excellence in Service: Delivering professional and efficient
                service.
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Continuous Improvement: Upgrading, training, and retaining our
                staff.
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Community Commitment: Upholding social responsibility within the
                community.
              </li>
            </ul>
            <Link href="/about-us">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel />
          </div>
        </div>
      </Container>
    </Section>
  );
};
