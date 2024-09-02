import { Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { blogs } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export const Blog = () => {
  return (
    <Section className="bg-primary-50 ">
      <Container>
        <div>
          <div className="flex w-full items-center justify-between">
            <Heading as="h2" className="text-section leading-none text-white">
              Blog
            </Heading>
            <Link href="/blog">
              <button className="rounded-full border px-6 py-3 text-white">
                See all
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-24 md:grid-cols-2">
            {blogs.slice(0, 4).map((item, id) => {
              return (
                <div className="group flex flex-col gap-8" key={id}>
                  <div className="aspect-video max-h-[360px] overflow-hidden rounded-3xl ">
                    <Link href={`/blog/${id}`}>
                      <Image
                        src={item.image}
                        alt="Blog A"
                        width={330}
                        height={330}
                        className="h-full w-full object-cover duration-300 group-hover:scale-110"
                      />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Heading
                        as="h3"
                        className="mb-4 text-sub-title text-white"
                      >
                        <Link href={`/blog/${id}`} className="text-[24px]">
                          {item.title}
                        </Link>
                      </Heading>
                      <p className="text-[16px] text-neutral-200 ">
                        {item.description.slice(0, 150)} Read More...
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/images/bruno.jpg"
                          alt="Bruno"
                          height={40}
                          width={40}
                          className="h-[40px] rounded-full object-cover"
                        />
                        <span className="text-[19px] text-white">
                          {item.writer}
                        </span>
                      </div>
                      <span className="text-white">{item.read_time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
