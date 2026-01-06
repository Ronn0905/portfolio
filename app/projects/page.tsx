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
      "An enterprise-grade property management platform developed under academic–industry constraints, focused on backend system design, document automation, and predictive maintenance workflows.",
    highlights: [
      "Designed and implemented a modular .NET 8 backend service integrating Azure Form Recognizer for document ingestion",
      "Built a structured data extraction pipeline to process invoices and warranty documents from scanned inputs",
      "Defined DTO-based service contracts to enforce clear boundaries between controllers, services, and data layers",
      "Designed a predictive maintenance workflow with controller stubs and extensible data flow for future ML integration",
      "Integrated Azure AI services with Azure SQL Server while maintaining separation between business logic and AI providers",
      "Built as part of an academic–industry capstone with enterprise architecture and scalability constraints",
    ],
    tech: ".NET 8, C#, Azure AI Vision, Azure Form Recognizer, Azure SQL, Angular",
    github: "https://github.com/Ronn0905/homeazzon-capstone-overview",
  },

  {
    title: "Async Job Processing System",
    description:
      "A distributed asynchronous job processing system designed to handle long-running tasks with retries, idempotency, and fault tolerance.",
    highlights: [
      "Designed a Redis-backed job queue enabling asynchronous task submission and background execution",
      "Implemented distributed locking to guarantee at-most-once job execution across multiple worker instances",
      "Built idempotency handling to prevent duplicate job submissions under client or network retries",
      "Implemented automatic retry logic with exponential backoff and failure recovery",
      "Designed horizontally scalable worker processes for parallel job execution",
      "Integrated OpenAI-powered tasks while keeping AI logic decoupled from core job orchestration",
    ],
    tech: "Python, FastAPI, Redis, OpenAI API",
    github: "https://github.com/Ronn0905/async-job-system",
  },

  {
    title: "Distributed URL Shortener",
    description:
      "A production-ready URL shortening service designed for high throughput, low latency, and safe API usage.",
    highlights: [
      "Designed RESTful APIs for URL creation and redirection with sub-50ms average latency",
      "Implemented Redis-based caching achieving 99%+ cache hit rate under load",
      "Built token bucket rate limiting to prevent abuse and ensure fair API usage",
      "Designed Base62 encoding strategy for compact, collision-resistant short URLs",
      "Containerized backend services using Docker for consistent deployment and scaling",
      "Designed to simulate real-world traffic patterns and backend scalability constraints",
    ],
    tech: "Java, Spring Boot, Redis, PostgreSQL, Docker",
    github: "https://github.com/Ronn0905/url-shortener",
  },

  {
    title: "Car Rental Application",
    description:
      "A backend-driven car rental system designed to model real-world booking flows, authentication, and administrative control paths.",
    highlights: [
      "Designed RESTful APIs to manage bookings, users, vehicles, and availability with clear domain boundaries",
      "Implemented role-based access control to separate customer-facing operations from admin workflows",
      "Applied backend-first design principles to ensure data consistency across booking and inventory operations",
      "Designed to simulate a production-grade booking system with administrative and operational constraints",
    ],
    tech: "Node.js, Express, MongoDB, React",
    github: "https://github.com/Ronn0905/CarRentalApplication",
  },

  {
    title: "AI Study Assistant",
    description:
      "A backend-focused AI application designed to deliver context-aware study responses using prompt-driven APIs.",
    highlights: [
      "Built a FastAPI backend to handle request orchestration and AI-driven response generation",
      "Designed prompt handling and API integration to keep model interactions isolated from core business logic",
      "Implemented MongoDB-based persistence for session-level context and conversation state",
      "Focused on scalable AI API integration patterns rather than model-specific logic",
    ],
    tech: "Python, FastAPI, MongoDB, OpenAI API",
    github: "https://github.com/Ronn0905/ai-study-assistant",
  },

  {
    title: "EV Charging Finder (iOS)",
    description:
      "A native iOS application built to explore real-time location-based data access and API-driven mobile workflows.",
    highlights: [
      "Implemented MVVM architecture using SwiftUI to separate view logic from data and network layers",
      "Integrated OpenChargeMap API to fetch and display real-time EV charging station data",
      "Designed a map-first user experience with search and favorites for repeated access",
      "Built to practice production-relevant iOS patterns including API integration and state management",
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
