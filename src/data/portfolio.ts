export const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education & Exp", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#connect"],
] as const;

export const socialLinks = [
  ["GitHub", "fa-github", "https://github.com/tashrifmiyaji"],
  ["LinkedIn", "fa-linkedin-in", "https://www.linkedin.com/in/tashrifmiyaji"],
  ["Twitter/X", "fa-twitter", "https://twitter.com/tashrifmiyaji"],
  ["Facebook", "fa-facebook-f", "https://www.facebook.com/tashrifmiyaji"],
] as const;

export const projects = {
  chat: {
    title: "Real-Time Chat Application",
    stack: "React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS",
    description:
      "An advanced state-persistent communication framework implementing isolated user message buffers, instantaneous text-sync statuses, and clean layout adjustments across screen formats.",
    challenges:
      "Synchronizing state variables during high network connection latency drops and avoiding multi-render feedback loops over websocket tunnels.",
    improvements:
      "Implement complex peer-to-peer media streaming channels and full text-search engines for archived database messaging strings.",
    live: "https://chat-app-1oga.onrender.com",
    repository: "https://github.com/tashrifmiyaji/chat-app",
    backendRepository: null,
    summary:
      "A responsive real-time messaging experience built around synchronized conversations.",
    icon: "fa-comments",
    color: "emerald",
    image: "/chat-app.png",
  },
  taxi: {
    title: "TaxiGo Ride Sharing System",
    stack: "React Hooks, Context API, Node.js, Socket.io, Tailwind CSS v4",
    description:
      "A dashboard interface allowing real-time driver tracking simulation panels, immediate calculations for category vehicles, and active components.",
    challenges:
      "Managing consistent updates for nested state arrays dynamically without creating layout rendering stutters on core mobile viewports.",
    improvements:
      "Integrate production Mapbox engines and add standard mock processing checkout APIs for seamless simulated booking transactions.",
    live: "https://github.com/tashrifmiyaji/Taxi",
    repository: "https://github.com/tashrifmiyaji/Taxi",
    backendRepository: null,
    summary:
      "An interactive multi-panel interface with synchronous ride and fare calculations.",
    icon: "fa-car",
    color: "blue",
    image: "/taxi-go.png",
  },
  courier: {
    title: "Courier Logistics Platform",
    stack:
      "Next.js, React, TypeScript, Tailwind CSS, React Query, Zustand, Express.js, Prisma, PostgreSQL, Redis, JWT, Google OAuth, Cloudinary",
    description:
      "A full-stack parcel delivery platform for booking shipments, tracking parcels, and managing courier operations, with a polished customer-facing frontend and a dedicated API backend.",
    challenges:
      "Keeping shipment and tracking data consistent across the customer experience and backend services while protecting account and parcel information.",
    improvements:
      "Expand live carrier integrations, add operational analytics, and build richer delivery notifications as the platform grows.",
    live: "https://courier-logistics-platform-frontend-3blbjxzsc.vercel.app",
    repository:
      "https://github.com/tashrifmiyaji/courier-logistics-platform-frontend",
    backendRepository: "https://github.com/tashrifmiyaji/courier-logistics-platform",
    summary:
      "A modern parcel delivery experience with shipment booking and parcel tracking.",
    icon: "fa-box",
    color: "emerald",
    image: "/courier-logistics-platform.png",
  },
} as const;

export type ProjectKey = keyof typeof projects;

export const projectKeys: ProjectKey[] = ["courier", "taxi", "chat"];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript ES6+",
        level: "ADVANCED",
        description: "Modern syntax, async flows, and browser APIs.",
        icon: "braces",
      },
      {
        name: "TypeScript",
        level: "INTERMEDIATE",
        description: "Typed application code and safer refactors.",
        icon: "code",
      },
      {
        name: "React",
        level: "ADVANCED",
        description: "Reusable components, hooks, and state-driven UI.",
        icon: "atom",
      },
      {
        name: "Next.js",
        level: "INTERMEDIATE",
        description: "App Router, server components, and routing.",
        icon: "layers",
      },
      {
        name: "HTML5",
        level: "ADVANCED",
        description: "Semantic markup and accessible page structure.",
        icon: "layout",
      },
      {
        name: "CSS3",
        level: "ADVANCED",
        description: "Responsive layouts, transitions, and animation.",
        icon: "palette",
      },
      {
        name: "Tailwind CSS",
        level: "ADVANCED",
        description: "Fast, consistent utility-first interfaces.",
        icon: "wind",
      },
      {
        name: "TanStack Query",
        level: "INTERMEDIATE",
        description: "Server-state fetching, caching, and updates.",
        icon: "refresh",
      },
      {
        name: "Zustand",
        level: "INTERMEDIATE",
        description: "Lightweight state management for React.",
        icon: "boxes",
      },
      {
        name: "React Hook Form",
        level: "INTERMEDIATE",
        description: "Performant forms with clear validation flows.",
        icon: "list",
      },
      {
        name: "Zod",
        level: "INTERMEDIATE",
        description: "Runtime schemas and end-to-end type safety.",
        icon: "shield",
      },
      {
        name: "Radix UI",
        level: "WORKING",
        description: "Accessible, composable interface primitives.",
        icon: "component",
      },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        level: "INTERMEDIATE",
        description: "JavaScript services and backend tooling.",
        icon: "server",
      },
      {
        name: "Express.js",
        level: "INTERMEDIATE",
        description: "API routing, middleware, and error handling.",
        icon: "route",
      },
      {
        name: "REST APIs",
        level: "INTERMEDIATE",
        description: "Structured endpoints and HTTP workflows.",
        icon: "network",
      },
      {
        name: "Socket.io",
        level: "INTERMEDIATE",
        description: "Real-time events and two-way communication.",
        icon: "radio",
      },
      {
        name: "JWT Authentication",
        level: "INTERMEDIATE",
        description: "Token-based auth and protected routes.",
        icon: "key",
      },
      {
        name: "Google OAuth",
        level: "WORKING",
        description: "Third-party sign-in and identity flows.",
        icon: "user",
      },
      {
        name: "Cloudinary",
        level: "WORKING",
        description: "Managed image uploads and media delivery.",
        icon: "image",
      },
      {
        name: "Multer",
        level: "WORKING",
        description: "Handling multipart form and file uploads.",
        icon: "upload",
      },
      {
        name: "Redis",
        level: "WORKING",
        description: "Caching and fast in-memory data access.",
        icon: "database",
      },
      {
        name: "Helmet & CORS",
        level: "WORKING",
        description: "HTTP security headers and cross-origin access.",
        icon: "shield",
      },
      {
        name: "Rate Limiting",
        level: "WORKING",
        description: "Protecting API routes from excessive requests.",
        icon: "network",
      },
      {
        name: "Nodemailer",
        level: "WORKING",
        description: "Sending transactional email from services.",
        icon: "mail",
      },
      {
        name: "dotenv",
        level: "WORKING",
        description: "Managing environment-based service configuration.",
        icon: "settings",
      },
    ],
  },
  {
    category: "Data & Workflow",
    skills: [
      {
        name: "PostgreSQL",
        level: "INTERMEDIATE",
        description: "Relational data modeling and SQL queries.",
        icon: "database",
      },
      {
        name: "Prisma ORM",
        level: "INTERMEDIATE",
        description: "Typed database access and schema modeling.",
        icon: "table",
      },
      {
        name: "MongoDB",
        level: "INTERMEDIATE",
        description: "Document data modeling and queries.",
        icon: "cylinder",
      },
      {
        name: "Git",
        level: "ADVANCED",
        description: "Branching, commits, and collaborative workflows.",
        icon: "git",
      },
      {
        name: "GitHub",
        level: "ADVANCED",
        description: "Repositories, pull requests, and project hosting.",
        icon: "github",
      },
      {
        name: "Biome",
        level: "WORKING",
        description: "Consistent formatting and code quality checks.",
        icon: "sparkles",
      },
      {
        name: "Vercel",
        level: "INTERMEDIATE",
        description: "Deploying and previewing web applications.",
        icon: "triangle",
      },
    ],
  },
] as const;
