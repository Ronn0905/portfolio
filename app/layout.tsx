import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ronit Khanna | Full-Stack & Backend Engineer",
  description:
    "Portfolio of Ronit Khanna — Full-Stack & Backend Engineer specializing in Java, .NET, FastAPI, Azure, and scalable backend systems.",

  openGraph: {
    title: "Ronit Khanna | Full-Stack & Backend Engineer",
    description:
      "Full-Stack & Backend Engineer specializing in Java, .NET, FastAPI, Azure, and scalable backend systems.",
    url: "https://portfolio-black-alpha-22.vercel.app",
    siteName: "Ronit Khanna Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Ronit Khanna | Full-Stack & Backend Engineer",
    description:
      "Full-Stack & Backend Engineer specializing in Java, .NET, FastAPI, Azure, and scalable backend systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
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
