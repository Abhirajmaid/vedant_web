import { Heading, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { TestimonialsCarousel } from "./Testimonials-carousel";
import { FooterBg } from "@/components/elements/icons/FooterBg";

export const Testimonials = () => {
  return (
    <Section className="relative rounded-3xl bg-beige-primary ">
      <div className="absolute top-0 h-full">
        <FooterBg />
      </div>
      <div className="absolute right-0 top-0 h-full scale-x-[-1] transform">
        <FooterBg />
      </div>
      <Container className="relative flex flex-col items-center">
        {/* <SubTitle subTitle="Testimonials" className="text-black" /> */}
        <Heading
          as="h2"
          className="w-full text-left text-section leading-none text-black"
        >
          {" "}
          Our Customers Testimonial
        </Heading>
        <div className="mt-24">
          <TestimonialsCarousel />
        </div>
      </Container>
    </Section>
  );
};
