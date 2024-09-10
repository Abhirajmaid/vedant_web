import Image from "next/image";

export const Logo: React.FC<{ img?: string }> = ({ img }) => {
  return (
    <>
      <Image
        src={img ? img : `/images/logo_color.png`}
        alt="vedant construction"
        width={500}
        height={500}
        className="h-auto w-full"
      />
    </>
  );
};
