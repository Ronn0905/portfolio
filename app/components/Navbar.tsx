import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <Link href="/" className="font-bold text-xl">
        Ronit Khanna
      </Link>

      <div className="flex gap-6 text-gray-700">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
