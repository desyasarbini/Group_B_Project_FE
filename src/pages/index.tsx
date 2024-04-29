import React from "react";
import { Card, Hero } from "@/components";

const Home = () => {
  return (
    <>
      <Hero />;
      <Card className="my-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="text-3xl text-blue-500">
                  <i className="bi bi-laptop"></i>
                </div>
                <h4 className="mt-4 text-xl font-semibold">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="mt-2 text-gray-700">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="text-3xl text-blue-500">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="mt-4 text-xl font-semibold">
                  <a href="">Dolor Sitema</a>
                </h4>
                <p className="mt-2 text-gray-700">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="text-3xl text-blue-500">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h4 className="mt-4 text-xl font-semibold">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p className="mt-2 text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur trade stravi
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
