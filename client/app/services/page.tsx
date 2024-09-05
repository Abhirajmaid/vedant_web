import { NewLetter, ServicesGrid, Testimonials } from "@/components";
import InfiniteMarquee from "@/components/elements/infinite-marquee/InfiniteMarquee";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <main>
      <ServicesGrid />
      <div className="-mt-6 h-fit overflow-hidden">
        <Link href="/contact-us">
          <InfiniteMarquee txt="GET A QUOTE" deg="0" />
        </Link>
      </div>
      <div className="p-2 sm:p-4">
        <NewLetter />
      </div>
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
    </main>
  );
};

export default ServicesPage;
