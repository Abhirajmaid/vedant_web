import { Button, Heading } from "@/components/elements";
import { FooterBg } from "@/components/elements/icons/FooterBg";
import { Container, Section } from "@/components/layouts";
import { heroImages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Section className="relative flex h-fit flex-col gap-28 bg-secondary-950">
      <div className="absolute -top-20 right-[100px] h-full scale-x-[-1.2]">
        <FooterBg />
      </div>
      <Container className="relative mt-[60px] flex h-1/2 items-center justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-white">
            <Heading as="h1" className="text-hero leading-none">
              Crafting Excellence, Building Futures
            </Heading>
          </div>
          <div className="mt-10 xl:mt-0">
            <p className="mb-10 text-base text-white">
              Building Dreams, Creating Reality. With over 12 years of
              unparalleled expertise in both residential and commercial
              construction, Vedant Construction stands as a beacon of quality
              and reliability. Our deep industry knowledge and unwavering
              commitment to excellence position us perfectly to expand and
              achieve even greater success. Trust Vedant Construction to
              transform your vision into reality.
            </p>
            <div className="z-[99] flex items-center gap-3">
              <Link href="/services">
                <Button variant="secondary">See our Services</Button>
              </Link>
              <Link href="/contact-us">
                <Button variant="tetriary-reversed">Get in touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="col-span-2 h-1/2 w-full">
        <Marquee autoFill>
          <div className="mx-3 flex items-start justify-center gap-6 ">
            {heroImages.map((item, id) => {
              return (
                <Image
                  key={id}
                  src={item.url}
                  alt="Hero Image"
                  width={450}
                  height={250}
                  className="h-[400px] rounded-xl object-cover"
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </Section>
  );
};

export { Hero };
