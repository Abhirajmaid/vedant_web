import { NewLetter, ServicesGrid, Testimonials } from "@/components";

const ServicesPage = () => {
  return (
    <main>
      <ServicesGrid />
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
