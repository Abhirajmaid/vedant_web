import { Container, Heading, PageHeader, Section } from "@/components";
import { blogs } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <PageHeader
          title="Our Latest Posts"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
            eum in aspernatur, placeat saepe aut quidem sit sunt officia iure"
          textColor="white"
        />
        <div className="mt-24 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2">
          {blogs.slice(0, 2).map((blog, id) => {
            return (
              <div className="group flex flex-col gap-8" key={id}>
                <div className="aspect-video max-h-[420px] overflow-hidden rounded-3xl ">
                  <Link href={`/blog/${id}`}>
                    <Image
                      src={blog.image}
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
                      className="mb-4 text-sub-title font-semibold text-white"
                    >
                      <Link href={`/blog/${id}`}>{blog.title}</Link>
                    </Heading>
                    <p className="text-neutral-100">
                      {blog.description.slice(0, 180)} Read More...
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
                      <span className="text-white">{blog.writer}</span>
                    </div>
                    <span className="text-white">{blog.read_time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog, id) => {
            return (
              <div className="group flex flex-col gap-8" key={id}>
                <div className="aspect-video max-h-[300px] overflow-hidden rounded-3xl ">
                  <Link href="/blog/a">
                    <Image
                      src={blog.image}
                      alt="Blog A"
                      width={330}
                      height={330}
                      className="h-full w-full object-cover duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <Heading as="h3" className="mb-4 text-sub-title text-white">
                      <Link href="/blog/a">{blog.title}</Link>
                    </Heading>
                    <p className="text-neutral-100">
                      {blog.description.slice(0, 180)}...Read More
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
                      <span className="text-white">{blog.writer}</span>
                    </div>
                    <span className="text-white">{blog.read_time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;
