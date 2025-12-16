type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Car Rental Application",
    description:
      "A full-stack car rental platform with user authentication, booking management, and admin controls for managing vehicles and reservations.",
    tech: "React, Node.js, Express, PostgreSQL",
    github: "https://github.com/Ronn0905/CarRentalApplication",
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered study assistant that analyzes coding problems and provides structured explanations and solutions using large language models.",
    tech: "FastAPI, Python, MongoDB, OpenRouter API",
    github: "https://github.com/Ronn0905/ai-study-assistant",
  },
  {
    title: "EV Charging Finder (iOS)",
    description:
      "An iOS application to locate nearby electric vehicle charging stations with a clean, mobile-first user experience.",
    tech: "Swift, iOS, OpenChargeMap API",
    github: "https://github.com/Ronn0905/EVChargingFinder",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>

            <p className="mt-3 text-gray-700">{project.description}</p>

            <p className="mt-3 text-sm text-gray-600">
              <strong>Tech:</strong> {project.tech}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
