import Link from "next/link";
import { Card } from "@/components";

const Header: React.FC = () => {
  return (
    <Card id="header" className="flex items-center w-full pt-5 pb-5">
      <Card className="container flex items-center justify-between w-full px-4 mx-auto">
        <h1 className="flex-auto text-lg font-semibold">
          <Link
            href="/"
            className="text-black no-underline hover:text-gray-700"
          >
            TekDungTes!
          </Link>
        </h1>

        <Card id="navbar" className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </Card>
      </Card>
    </Card>
  );
};

export default Header;
