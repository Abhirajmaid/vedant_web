import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src="/images/logo_color.png"
        alt="vedant construction"
        width={200}
        height={200}
        className="h-auto w-full"
      />
    </>
  );
};
