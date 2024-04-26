import Link from "next/link";
import { Card, ListWrapper, TextTag } from "@/components";

const Header: React.FC = () => {
  return (
    <Card id="header" className="flex items-center w-full pt-5 pb-5">
      <Card className="container flex items-center justify-between w-full px-4 mx-auto">
        <TextTag
          type="h1"
          className="flex-auto text-lg font-semibold text-black no-underline hover:text-gray-700"
        >
          <Link href="/">TekDungTes!</Link>
        </TextTag>

        <Card id="navbar" className="hidden md:block">
          <ListWrapper
            className="flex space-x-4"
            classNameChild="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </ListWrapper>
        </Card>
      </Card>
    </Card>
  );
};

export default Header;
