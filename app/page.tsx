export default function Home() {
  return (
    <main className="min-h-screen px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Ronit Khanna</h1>

      <p className="mt-4 text-xl text-gray-600">
        Full-Stack & AI Engineer • Java • .NET • FastAPI • Azure AI
      </p>

      <p className="mt-6 text-gray-700 max-w-2xl">
        I build scalable backend systems, AI-powered applications,
        and production-ready full-stack products.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-md"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border rounded-md"
        >
          Contact Me
        </a>

        <a
          href="/Ronit_Khanna_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-md"
        >
          Download Resume
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <p className="mt-4 text-gray-700">
          Java • Spring Boot • .NET • FastAPI • PostgreSQL • MongoDB • Azure • React • OpenAI API • Swift

        </p>
      </div>
    </main>
  );
}
