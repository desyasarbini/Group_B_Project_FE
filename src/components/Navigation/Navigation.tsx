import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" text-black px-8 py-2 text-sm font-medium relative flex h-16 items-center justify-between">
      <div>Logo</div>
      <div className="relative flex gap-10 justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
