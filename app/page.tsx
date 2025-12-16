export default function Home() {
  return (
    <main className="min-h-screen px-8 py-20 max-w-5xl mx-auto">
      {/* Hero */}
      <h1 className="text-5xl font-bold tracking-tight">
        Ronit Khanna
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Full-Stack & AI Engineer • Java • .NET • FastAPI • Azure AI
      </p>

      <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
        I design and build scalable backend systems, AI-powered applications,
        and production-grade full-stack platforms used in real-world environments.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-md"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-gray-300 rounded-md"
        >
          Contact Me
        </a>

        <a
          href="/Ronit_Khanna_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-md"
        >
          Download Resume
        </a>
      </div>

      {/* Tech Stack (short + subtle) */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <p className="mt-4 text-sm text-gray-500">
          Java • Spring Boot • .NET • FastAPI • PostgreSQL • MongoDB • Azure • React • OpenAI API • Swift
        </p>
      </div>
    </main>
  );
}
