// pages/about.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white container mx-auto">
      <header className=" text-3xl font-bold py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">TekDungTes</h1>
        </div>
      </header>
      image
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="w-full bg-gray-800 rounded-lg">
          </div>
          <div>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam est vel risus congue lacinia. Nulla
              facilisi. Vestibulum posuere fermentum purus, vel pharetra velit sodales id.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam est vel risus congue lacinia. Nulla
              facilisi. Vestibulum posuere fermentum purus, vel pharetra velit sodales id.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
