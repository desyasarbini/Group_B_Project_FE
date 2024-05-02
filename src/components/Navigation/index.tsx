import Link from "next/link";
import { Card, ListWrapper, TextTag } from "@/components";

const Header: React.FC = () => {
  return (
    <Card id="header" className="flex flex-col md:flex-row items-center w-full pt-5 pb-5">
      <Card className="container flex items-center justify-between w-full px-4 mx-auto">
        <TextTag
          type="h1"
          className="flex-auto text-4xl font-bold text-black no-underline hover:text-gray-700"
        >
          <Link href="/">LSTR!</Link>
        </TextTag>

        <Card id="navbar" className="md:flex md:items-center">
          <ListWrapper
            className="flex flex-col md:flex-row md:space-x-4 md:space-y-0"
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
