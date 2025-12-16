import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Ronit Khanna | Full-Stack & AI Engineer",
  description:
    "Portfolio of Ronit Khanna – Full-Stack & AI Engineer specializing in Java, .NET, FastAPI, and Azure AI.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
