import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  Testimonials,
} from "@/components";
import InfiniteMarquee from "@/components/elements/infinite-marquee/InfiniteMarquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4">
        <Features />
      </div>
      <div className="-mt-6 h-fit overflow-hidden">
        <Link href="/contact-us">
          <InfiniteMarquee txt="GET A QUOTE" deg="0" />
        </Link>
      </div>
      <AboutUs />
      <div className="p-2 sm:p-4">
        <Metrics />
      </div>
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
      <div className="p-2 sm:p-4">
        <NewLetter />
      </div>
      <div className="p-2 sm:p-4">
        <Blog />
      </div>
      <div className="-mt-6 h-fit overflow-hidden">
        <Link href="/contact-us">
          <InfiniteMarquee txt="GET A QUOTE" deg="0" />
        </Link>
      </div>
    </main>
  );
}
