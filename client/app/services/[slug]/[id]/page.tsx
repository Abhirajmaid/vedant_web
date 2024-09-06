"use client";
import { Container, Heading, Section } from "@/components";
import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/data";
import { useParams } from "next/navigation";
import InfiniteMarquee from "@/components/elements/infinite-marquee/InfiniteMarquee";
import Link from "next/link";
import { FooterBg } from "@/components/elements/icons/FooterBg";

interface SubService {
  category: string;
  question: string;
  answer: string;
  pricing_range?: string;
  url?: string;
  info?: {
    title: string;
    description: string;
    process: string[];
    benefits: string[];
  };
}

interface Service {
  id: string;
  title: string;
  description: string;
  img: string;
  icon: string;
  url?: string;
  sub_services: SubService[];
}

const WaterproofingServices: React.FC = () => {
  const { id, slug } = useParams();

  const currentService: Service | undefined = servicesData.find(
    (item) => item.id === slug,
  );

  const currentSubService: SubService | undefined =
    currentService?.sub_services.find((item) => item.url === id);

  console.log(currentSubService?.info?.title);

  if (!currentService || !currentSubService) {
    return <div>Service or Sub-service not found!</div>;
  }

  return (
    <Section className="bg-white">
      <div className="absolute top-0 h-full">
        <FooterBg />
      </div>
      <div className="absolute right-0 top-0 h-full -scale-x-[1]">
        <FooterBg />
      </div>
      <Container className="relative mt-[50px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title with animation */}
          <motion.div
            className="mb-6 text-title font-bold text-gray-800"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {currentSubService?.info?.title}
          </motion.div>

          {/* Description with fading animation */}
          <motion.p
            className="mb-8 text-base text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {currentSubService?.info?.description}
          </motion.p>

          {/* Process Section */}
          <section>
            <motion.h2
              className="mb-4 text-sub-title font-semibold text-gray-700"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Process
            </motion.h2>
            <motion.ul
              className="list-inside list-disc space-y-2 text-gray-600"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {currentSubService?.info?.process?.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="transform rounded-lg bg-beige-primary p-4 text-base text-gray-800 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl"
                >
                  {step}
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* Benefits Section */}
          <section className="mt-10">
            <motion.h2
              className="mb-4 text-sub-title font-semibold text-gray-700"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Benefits
            </motion.h2>
            <motion.ul
              className="list-inside list-disc space-y-2 text-gray-600"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {currentSubService?.info?.benefits?.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="transform rounded-lg bg-beige-primary  p-4 text-base text-gray-800 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl"
                >
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>
          </section>
        </motion.div>
      </Container>
      <div className="relative -mb-20 mt-10 h-fit overflow-hidden">
        <Link href="/contact-us">
          <InfiniteMarquee txt="GET A QUOTE" deg="0" />
        </Link>
      </div>
    </Section>
  );
};

export default WaterproofingServices;
