import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        src="/images/vlogo_white.png"
        alt="vedant construction"
        width={200}
        height={200}
        className="h-auto w-[220px]"
      />
    </div>
  );
};
