type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "HomeaZZon – AI-Powered Property Management (Capstone)",
    description:
      "An enterprise-grade, AI-powered property management platform developed as part of an academic–industry capstone project, focused on document automation and predictive maintenance.",
    highlights: [
      "Designed and implemented a .NET 8 backend service integrating Azure Form Recognizer",
      "Automated extraction of invoice and warranty data from scanned property documents",
      "Defined DTO-based service contracts and applied clean architecture principles",
      "Designed the predictive maintenance framework with controller stubs and data flow",
      "Integrated Azure AI services with Azure SQL Server in a scalable backend architecture",
      "Built as part of an academic–industry capstone with enterprise architecture constraints",
    ],
    tech: ".NET 8, C#, Azure AI Vision, Azure Form Recognizer, Azure SQL, Angular",
    github: "https://github.com/Ronn0905/homeazzon-capstone-overview",
  },
  {
    title: "Car Rental Application",
    description:
      "A full-stack car rental platform designed to handle authentication, bookings, and administrative workflows at scale.",
    highlights: [
      "Designed RESTful APIs for bookings, users, and vehicle management",
      "Implemented role-based access control for admin and users",
      "Focused on clean backend architecture and data consistency",
      "Designed to simulate a production-grade booking system with admin workflows",
    ],
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/Ronn0905/CarRentalApplication",
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered learning platform that generates personalized study material and explanations using large language models.",
    highlights: [
      "Built FastAPI backend for AI-driven content generation",
      "Integrated OpenAI APIs for contextual responses",
      "Designed MongoDB-backed storage for session-based learning",
      "Focused on scalable AI API integration and prompt-driven responses",
    ],
    tech: "Python, FastAPI, MongoDB, OpenAI API",
    github: "https://github.com/Ronn0905/ai-study-assistant",
  },
  {
    title: "EV Charging Finder (iOS)",
    description:
      "A native iOS application that helps users discover nearby electric vehicle charging stations using real-time location data.",
    highlights: [
      "Built using SwiftUI with MVVM architecture",
      "Integrated OpenChargeMap API for live charging station data",
      "Implemented favorites and map-based search for improved UX",
      "Built to practice real-world iOS patterns: MVVM, API integration, and map-first UX",
    ],
    tech: "Swift, SwiftUI, OpenChargeMap API, iOS",
    github: "https://github.com/Ronn0905/EVChargingFinder",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-8 py-24 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-8 transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>

            <p className="mt-3 text-gray-700 max-w-3xl">
              {project.description}
            </p>

            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              <strong>Tech:</strong> {project.tech}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-blue-600 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
