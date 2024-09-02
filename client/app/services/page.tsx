import { NewLetter, ServicesGrid, Testimonials } from "@/components";

const ServicesPage = () => {
  return (
    <main>
      <ServicesGrid />
      <div className="mb-4">
        <NewLetter />
      </div>
      <Testimonials />
    </main>
  );
};

export default ServicesPage;
