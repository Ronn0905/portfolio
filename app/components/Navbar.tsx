import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold">
          Ronit Khanna
        </Link>

        <div className="flex gap-6 text-sm text-gray-700">
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
