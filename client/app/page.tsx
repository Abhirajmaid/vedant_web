import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExpert,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <Features />
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
    </main>
  );
}
