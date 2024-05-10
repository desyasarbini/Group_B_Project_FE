import { useState } from 'react';
import Link from "next/link";
import { Card, ListWrapper, TextTag } from "@/components";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Card id="header" className="flex flex-col md:flex-row items-center w-full pt-5 pb-5">
      <Card className="container flex items-center justify-between w-full px-4 mx-auto">
        <TextTag
          type="h1"
          className="flex-auto text-4xl font-bold text-black no-underline hover:text-gray-700"
        >
          <Link href="/">LSTR!</Link>
        </TextTag>

        <div id="navbar" className="md:flex md:items-center">
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>

          <ListWrapper
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:flex-row md:space-x-4 md:space-y-0`}
            classNameChild="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </ListWrapper>
        </div>
      </Card>
    </Card>
  );
};

export default Header;
