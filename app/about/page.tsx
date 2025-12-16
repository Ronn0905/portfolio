export default function About() {
  return (
    <main className="min-h-screen px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-gray-600 max-w-3xl leading-relaxed">
        I am a Full-Stack & AI Engineer with strong experience in backend engineering,
        cloud-native systems, and AI integrations. My work focuses on designing
        scalable APIs, production-ready services, and intelligent systems that
        solve real business problems.
      </p>

      {/* Tech Stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-900">Languages</h3>
            <p>Java • C# • Python • C++</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Backend & APIs</h3>
            <p>Spring Boot • .NET 8 • FastAPI • RESTful APIs</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Databases</h3>
            <p>PostgreSQL • SQL Server • MongoDB • MySQL</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">AI & Integrations</h3>
            <p>
              Azure AI Vision • Azure Form Recognizer • OpenAI API • OpenRouter API • LangChain
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Frontend</h3>
            <p>React • Angular • HTML • CSS</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Cloud & DevOps</h3>
            <p>Microsoft Azure • Docker • Git • CI/CD Pipelines</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Tools & Platforms</h3>
            <p>GitHub • VS Code • Postman</p>
          </div>
        </div>
      </div>
    </main>
  );
}
