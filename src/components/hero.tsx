import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  altText: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.altText}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
<div className="absolute left-0 w-1/2 h-full  bg-gradient-to-r from-slate-800"></div>

      <div className="placeholder-teal-50 justify-center text-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
