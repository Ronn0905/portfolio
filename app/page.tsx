export default function Home() {
  return (
    <main className="min-h-screen px-8 py-24 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight">
        Ronit Khanna
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Full-Stack & Backend Engineer | Java, .NET, FastAPI, Azure AI
      </p>

      <p className="mt-6 text-gray-700 max-w-2xl leading-relaxed">
        I design and build scalable backend systems, AI-powered applications, 
        and production-grade full-stack platforms used in real-world environments.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border rounded-md text-sm hover:bg-gray-50 transition"
        >
          Contact Me
        </a>

        <a
          href="/Ronit_Khanna_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-md text-sm hover:bg-gray-50 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Tech Stack */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Java • Spring Boot • .NET • FastAPI • PostgreSQL • MongoDB • Azure •
          React • OpenAI API • Swift
        </p>
      </section>
    </main>
  );
}
