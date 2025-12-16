import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ronit Khanna | Full-Stack & AI Engineer",
  description:
    "Portfolio of Ronit Khanna — Full-Stack & AI Engineer specializing in backend systems, AI integrations, and scalable applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        {/* Navbar */}
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            <Link href="/" className="font-semibold text-lg">
              Ronit Khanna
            </Link>

            <nav className="space-x-6 text-sm text-gray-600">
              <Link href="/about" className="hover:text-black">About</Link>
              <Link href="/projects" className="hover:text-black">Projects</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
