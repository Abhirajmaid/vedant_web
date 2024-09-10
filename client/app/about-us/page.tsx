/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

import { Building2, Users, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container className="mt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Heading as="h1" className="text-hero">
              About Us
            </Heading>
            <div>
              <p className="mb-4">
                At Vedant Construction, we specialize in transforming visions
                into reality with over 12 years of expertise in both residential
                and commercial construction. Our commitment to excellence is
                reflected in every project we undertake, fostering long-term
                relationships with our clients and providers. We prioritize
                delivering comprehensive, professional, and efficient services
                while continuously upgrading and training our staff. Dedicated
                to social responsibility, we actively contribute to the
                community, ensuring our growth benefits everyone we touch. Trust
                Vedant Construction to build your dreams and shape your future.
              </p>
              <Button variant="secondary">Read more</Button>
            </div>
          </div>
          <main className="container mx-auto mt-[80px] w-full flex-grow px-4 py-8 md:w-[80%]">
            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 1985, BuildRight Co. has been at the forefront of the
                construction industry for over three decades. What started as a
                small family business has grown into a leading construction
                firm, known for our commitment to quality, innovation, and
                customer satisfaction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                At BuildRight Co., our mission is to build not just structures,
                but lasting relationships with our clients. We strive to deliver
                exceptional quality in every project, big or small, while
                maintaining the highest standards of safety and sustainability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Why Choose Us</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex flex-col items-center p-6">
                    <Building2 className="text-primary mb-4 h-12 w-12" />
                    <h3 className="mb-2 text-xl font-semibold">Expertise</h3>
                    <p className="text-muted-foreground text-center">
                      With over 35 years of experience, we bring unparalleled
                      expertise to every project.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex flex-col items-center p-6">
                    <Users className="text-primary mb-4 h-12 w-12" />
                    <h3 className="mb-2 text-xl font-semibold">
                      Dedicated Team
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Our team of skilled professionals is committed to
                      delivering excellence.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex flex-col items-center p-6">
                    <Trophy className="text-primary mb-4 h-12 w-12" />
                    <h3 className="mb-2 text-xl font-semibold">
                      Award-Winning
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Recognized for our outstanding projects and customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
              <p className="text-muted-foreground mb-4">
                Interested in working with us? We'd love to hear from you.
                Contact us today to discuss your project.
              </p>
              <Button variant="secondary">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </section>
          </main>
        </Container>
      </Section>
      {/* <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            our work philosophy
          </Heading>
          <div className="sticky grid gap-4">
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
          </div>
        </Container>
      </Section> */}
      <div className="p-2 !py-0 sm:p-4">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
