import React from "react";
import Image from "next/image";
import homeImg from "/public/slide-1.jpg";
import { Card } from "@/components";

interface Props {
  page: string;
  image: string;
}

const Hero = () => {
  return (
    <Card className="container relative mx-auto bg-gray-800 overflow-hidden w-full ">
      <Card className=" relative h-80vh ">
        <Card className="relative flex flex-auto justify-between gap-10 mx-12 my-40 h-80vh md:flex-row">
          <Card className="w-1/2">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block text-indigo-400">
                Lorem ipsum dolor sit
              </span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, nihil ex quibusdam incidunt libero doloribus
              consectetur debitis magni neque necessitatibus?
            </p>
          </Card>
          <Card className="align-center flex justify-center w-1/2 h-full">
            <Image src={homeImg} alt="city" />
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default Hero;
