import React from "react";
import Image, { StaticImageData } from "next/image";

import { Card } from "@/components";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
}

const Hero = ({ image, title, description }: Props) => {
  return (
    <Card className="relative mx-auto bg-gray-800 overflow-hidden w-full">
      <Card className="relative h-80vh ">
        <Card className="relative flex flex-col-reverse justify-between gap-10 mx-12 my-20 md:my-40 h-80vh md:flex-row">
          <Card className="flex-row t w-full md:w-1/2">
            <h2 className="text-4xl tracking-tight font-extrabold text-white text-5xl md:text-5xl">
              <span className="block text-indigo-400">{title}</span>
            </h2>
            <p className="mt-3 max-w-md  text-base text-gray-300 text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
          </Card>
          <Card className="align-center flex justify-center h-full w-full md:w-1/2">
            <Image src={image} alt="city" />
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default Hero;
