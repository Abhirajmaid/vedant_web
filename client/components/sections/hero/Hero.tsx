import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { heroImages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/stock1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <Container className="relative z-10 flex h-full items-center justify-center">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-2">
          <div className="text-white">
            <Heading
              as="h1"
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              Crafting Excellence, Building Futures
            </Heading>
            <p className="mt-6 text-base md:text-xl">
              Building Dreams, Creating Reality. With over 12 years of
              unparalleled expertise in both residential and commercial
              construction, Vedant Construction stands as a beacon of quality
              and reliability. Our deep industry knowledge and unwavering
              commitment to excellence position us perfectly to expand and
              achieve even greater success. Trust Vedant Construction to
              transform your vision into reality.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/services">
                <Button variant="secondary">See our Services</Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  variant="tetriary-reversed"
                  className="border-white !text-white"
                >
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden w-full md:block">
            <Marquee autoFill>
              <div className="mx-3 flex items-start justify-center gap-6">
                {heroImages.map((item, id) => (
                  <Image
                    key={id}
                    src={item.url}
                    alt="Hero Image"
                    width={450}
                    height={250}
                    className="h-[400px] rounded-xl object-cover"
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Hero };
