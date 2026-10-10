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
    summary:
      "A responsive real-time messaging experience built around synchronized conversations.",
    icon: "fa-comments",
    color: "emerald",
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
    summary:
      "An interactive multi-panel interface with synchronous ride and fare calculations.",
    icon: "fa-car",
    color: "blue",
  },
  cms: {
    title: "Prisma-Press CMS Engine",
    stack: "TypeScript, PostgreSQL, Prisma ORM, Express.js, Node.js",
    description:
      "A strictly engineered content manager server optimized with secure relational query paths, data caching configurations, and robust schema validation layers.",
    challenges:
      "Handling complex data relations efficiently and avoiding schema synchronization bottlenecks during parallel structural updates.",
    improvements:
      "Incorporate Redis cache networks and add automatic schema version tracing configurations for production monitoring.",
    live: "https://github.com/tashrifmiyaji/Prisma-Press",
    repository: "https://github.com/tashrifmiyaji/Prisma-Press",
    summary:
      "A relational data management backend built around safe database structures.",
    icon: "fa-database",
    color: "purple",
  },
} as const;

export type ProjectKey = keyof typeof projects;

export const projectKeys: ProjectKey[] = ["chat", "taxi", "cms"];

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: "fa-laptop-code",
    color: "emerald",
    skills: [
      ["React.js / Next.js", 90],
      ["TypeScript / JS", 85],
      ["Tailwind CSS", 95],
    ],
  },
  {
    title: "Backend & Databases",
    icon: "fa-server",
    color: "blue",
    skills: [
      ["Node.js / Express", 85],
      ["MongoDB", 80],
      ["PostgreSQL & Prisma", 75],
    ],
  },
  {
    title: "Tools & Environments",
    icon: "fa-screwdriver-wrench",
    color: "purple",
    skills: [
      ["Git & GitHub Workflow", 90],
      ["REST APIs / Socket.io", 85],
      ["Python Basics", 60],
    ],
  },
] as const;

export const colorClasses = {
  emerald: {
    text: "text-emerald-400",
    bar: "bg-emerald-500",
    icon: "text-emerald-500",
    backdrop: "from-emerald-900/40",
  },
  blue: {
    text: "text-blue-400",
    bar: "bg-blue-500",
    icon: "text-blue-500",
    backdrop: "from-blue-900/40",
  },
  purple: {
    text: "text-purple-400",
    bar: "bg-purple-500",
    icon: "text-purple-500",
    backdrop: "from-purple-900/40",
  },
} as const;
