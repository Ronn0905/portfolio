export default function About() {
  return (
    <main className="min-h-screen px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 max-w-3xl">
        I am a Full-Stack & AI Engineer with strong experience in backend development,
        cloud-based systems, and AI integrations. I enjoy building scalable APIs,
        automating workflows, and creating production-ready applications.
      </p>

      {/* Tech Stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>Java • C# • Python • C++</p>
          </div>

          <div>
            <h3 className="font-semibold">Backend & APIs</h3>
            <p>Spring Boot • .NET 8 • FastAPI • RESTful APIs</p>
          </div>

          <div>
            <h3 className="font-semibold">Databases</h3>
            <p>PostgreSQL • SQL Server • MongoDB • MySQL</p>
          </div>

          <div>
            <h3 className="font-semibold">AI & Integrations</h3>
            <p>
              Azure AI Vision • Azure Form Recognizer • OpenAI API • OpenRouter API • LangChain
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p>React • Angular • HTML • CSS</p>
          </div>

          <div>
            <h3 className="font-semibold">Cloud & DevOps</h3>
            <p>Microsoft Azure • Docker • Git • CI/CD Pipelines</p>
          </div>

          <div>
            <h3 className="font-semibold">Tools & Platforms</h3>
            <p>GitHub • VS Code • Postman</p>
          </div>
        </div>
      </div>
    </main>
  );
}
