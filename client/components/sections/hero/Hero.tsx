import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Section className="bg-secondary-950 h-fit flex flex-col gap-32">
      <Container className="h-1/2 flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-white">
            <Heading as="h1" className="text-hero leading-none">
              Crafting Excellence, Building Futures
            </Heading>
          </div>
          <div className="mt-10 xl:mt-0">
            <p className="text-base text-white mb-10">
              Building Dreams, Creating Reality. With over 12 years of unparalleled expertise in both residential and commercial construction, Vedant Construction stands as a beacon of quality and reliability. Our deep industry knowledge and unwavering commitment to excellence position us perfectly to expand and achieve even greater success. Trust Vedant Construction to transform your vision into reality.
            </p>
            <Link href="/services">
            <Button variant="secondary">See our Solutions</Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill>
          <div className="flex justify-center gap-6 items-start mx-3">
            <Image
              src="/images/hero1.png"
              alt="Hero Image"
              width={450}
              height={250}
              className="h-[400px]"
              />
            <Image
              src="/images/hero2.png"
              alt="Hero Image"
              width={450}
              height={250}
              className="h-[400px]"
              />
            <Image
              src="/images/hero3.png"
              alt="Hero Image"
              width={450}
              height={250}
              className="h-[400px]"
            />
          </div>
        </Marquee>
      </div>
    </Section>
  );
};

export { Hero };
