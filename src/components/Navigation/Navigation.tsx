import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;
