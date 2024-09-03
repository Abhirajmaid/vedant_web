import cx from "clsx";

type SectionTypes = {
  children: React.ReactNode;
  className: string;
};
export const Section = ({ children, className }: SectionTypes) => {
  return (
    <section className={cx("overflow-hidden py-16 sm:py-24", className)}>
      {children}
    </section>
  );
};
