export default function About() {
  return (
    <main className="min-h-screen px-8 py-24 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 max-w-3xl leading-relaxed">
        I am a Full-Stack & AI Engineer with strong experience in backend engineering, cloud-native systems, and AI integrations. 
        My work focuses on designing scalable APIs, production-ready services, and intelligent systems that solve real business problems.

      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>

        <div className="space-y-8 text-gray-700">
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
              Azure AI Vision • Azure Form Recognizer • OpenAI API •
              OpenRouter API • LangChain
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
      </section>
    </main>
  );
}
