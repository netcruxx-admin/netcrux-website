export type InsightSection = {
  heading: string
  body: string
  bullets?: string[]
}

export type InsightArticle = {
  slug: string
  title: string
  desc: string
  category: string
  author: string
  date: string
  readTime: string
  img: string
  intro: string
  sections: InsightSection[]
  conclusion: string
}

const insightArticles: InsightArticle[] = [
  {
    slug: "why-we-choose-nextjs",
    title: "Why We Choose Next.js for Every Web Project",
    desc: "A deep dive into why Next.js is our default framework for web — from the App Router to built-in performance optimisations.",
    category: "Engineering",
    author: "Net-Crux Team",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    img: "/expertise/web.jpg",
    intro:
      "When clients come to us for a web application, the first technical question we answer internally is almost always the same: what framework do we build on? After shipping 25+ products across industries, our answer has consistently been Next.js — and the reasons go far beyond it being popular. Here is why it sits at the centre of our web stack.",
    sections: [
      {
        heading: "The App Router Changed Everything",
        body: "Next.js 13 introduced the App Router, and it fundamentally changed how we think about routing, data fetching, and layout composition. With React Server Components at its core, we can now fetch data at the component level on the server — eliminating unnecessary client-side waterfalls and reducing the JavaScript shipped to the browser.",
        bullets: [
          "Nested layouts that persist across navigations without re-mounting",
          "Server Components for zero-bundle-cost data fetching",
          "Streaming with Suspense for progressively rendered pages",
          "Parallel and intercepting routes for complex UI patterns like modals",
        ],
      },
      {
        heading: "Rendering Flexibility: SSR, SSG, and ISR in One Project",
        body: "No two pages in a real product have the same data requirements. A marketing homepage wants to be statically generated for maximum speed. A dashboard needs server-side rendering for fresh, user-specific data. A product catalogue benefits from Incremental Static Regeneration — rebuilt in the background as inventory changes. Next.js lets us mix all three strategies within a single project, per route, without juggling multiple frameworks.",
      },
      {
        heading: "Performance Out of the Box",
        body: "Performance is not something we want to bolt on at the end. Next.js ships with a set of built-in optimisations that would otherwise require significant manual work:",
        bullets: [
          "next/image — automatic WebP conversion, lazy loading, and responsive srcsets",
          "next/font — self-hosted Google Fonts with zero layout shift",
          "next/link — prefetching visible links in the viewport automatically",
          "Automatic code splitting per route — users only download what they need",
          "Built-in bundle analyser and Turbopack for fast local development",
        ],
      },
      {
        heading: "TypeScript First, Full Stack",
        body: "Our entire web stack is TypeScript. Next.js has first-class TypeScript support out of the box — auto-generated types for route params, search params, and even fetch responses when using the new cache APIs. This means our type safety extends from the database query through the server component all the way to the client component, catching bugs at compile time instead of runtime.",
      },
      {
        heading: "API Routes and the Full-Stack Story",
        body: "For projects that do not need a dedicated backend service, Next.js Route Handlers let us ship a full-stack product from a single repository. Contact forms, webhook receivers, authentication callbacks, and lightweight REST endpoints all live alongside the frontend code. For larger projects, these same routes act as a clean BFF (Backend For Frontend) layer sitting in front of a Node.js microservice.",
      },
      {
        heading: "Deployment and DevOps Simplicity",
        body: "We deploy on Vercel — the platform built by the Next.js team. Preview deployments for every pull request, instant global CDN, automatic edge caching, and zero-downtime deploys are all available with minimal configuration. For clients who require self-hosting, Next.js also runs cleanly on Docker and Node.js servers, giving us flexibility without being locked into any platform.",
      },
    ],
    conclusion:
      "Next.js is not just a framework we use — it is the foundation we trust. Its consistent innovation, strong community, and production-proven reliability mean we spend less time fighting infrastructure and more time building features that matter to our clients. If you are planning a web project and want to understand how this stack would fit your requirements, we would love to talk.",
  },
  {
    slug: "react-native-ios-android",
    title: "React Native: One Codebase, Two Platforms, Zero Compromise",
    desc: "How we use React Native's New Architecture to ship high-performance iOS and Android apps from a single shared codebase.",
    category: "Mobile",
    author: "Net-Crux Team",
    date: "Jun 20, 2026",
    readTime: "8 min read",
    img: "/expertise/mobile.jpg",
    intro:
      "Building a mobile app used to mean a hard choice: write it twice (Swift for iOS, Kotlin for Android) or accept the performance trade-offs of older cross-platform tools. React Native has fundamentally changed that equation. Across our mobile projects — from taxi booking apps to food delivery platforms — React Native has let us ship production-quality apps on both platforms while sharing 85–95% of our codebase. Here is how we do it, and why it works.",
    sections: [
      {
        heading: "Why React Native Over Flutter or Native?",
        body: "The cross-platform decision comes up on every mobile project. We evaluated all the major options:",
        bullets: [
          "Native (Swift + Kotlin): Maximum performance and platform fidelity, but doubles development time and cost. Only justified for highly platform-specific apps like camera-heavy or games.",
          "Flutter: Great UI consistency and performance, but Dart is a smaller ecosystem and the widget layer paints its own UI rather than using native components.",
          "React Native: Renders real native components (UIView on iOS, View on Android), shares code with our React web teams, and has an enormous JavaScript/TypeScript ecosystem to draw from.",
        ],
      },
      {
        heading: "The New Architecture: JSI and Fabric",
        body: "The old React Native bridge — the asynchronous JSON bridge between JavaScript and native code — was the source of most performance complaints. The New Architecture, now stable and enabled by default, replaces this entirely:",
        bullets: [
          "JSI (JavaScript Interface): Direct, synchronous calls between JS and native — no more serialisation overhead",
          "Fabric: The new rendering system that aligns the native render tree with React's concurrent features",
          "TurboModules: Native modules that are lazily loaded and directly referenced via JSI",
          "Codegen: Auto-generates type-safe native bindings from TypeScript interfaces",
        ],
      },
      {
        heading: "Our Shared Codebase Architecture",
        body: "On a typical React Native project at Net-Crux, the codebase is structured to maximise sharing while isolating platform differences cleanly:",
        bullets: [
          "Business logic, API calls, and state management (Zustand/React Query) — 100% shared",
          "UI components using React Native's cross-platform primitives — ~90% shared",
          "Platform-specific files using the .ios.tsx / .android.tsx convention where behaviour genuinely differs",
          "Navigation with Expo Router (file-based routing, familiar for our Next.js developers)",
          "Shared TypeScript types between the mobile app and our Node.js backend",
        ],
      },
      {
        heading: "Expo: Our Development Toolkit",
        body: "We build on Expo's managed and bare workflows depending on project requirements. Expo gives us over-the-air updates (ship bug fixes without an App Store review), a rich library of pre-built native modules, and EAS Build for CI/CD pipelines that produce signed App Store and Play Store builds automatically. For clients, this means faster iteration and shorter time-to-fix for urgent production issues.",
      },
      {
        heading: "Real-World Performance: What We See in Production",
        body: "On our MedyTravels taxi booking app — which involves real-time location tracking, map rendering, and live ride updates — React Native with the New Architecture delivers smooth 60fps interactions and sub-100ms response times on mid-range Android devices. The New Architecture's synchronous layout engine means animations triggered by native gestures no longer have the jank that plagued older React Native versions.",
      },
      {
        heading: "When We Recommend Going Native",
        body: "React Native is our default, but it is not always the right choice. We recommend native development when the app is deeply hardware-dependent (AR/VR, high-performance video processing, complex Bluetooth peripherals), when the team has strong existing native expertise, or when a client has a single-platform requirement and budget allows the investment.",
      },
    ],
    conclusion:
      "React Native with the New Architecture is no longer a compromise — it is a genuine first choice for cross-platform mobile development. If you are building a mobile app and want to understand how a shared codebase could reduce your budget without cutting corners on quality, reach out to the Net-Crux team.",
  },
  {
    slug: "nodejs-typescript-backend",
    title: "Node.js + TypeScript: How We Build Reliable Backends",
    desc: "An inside look at how we structure our Node.js backends with TypeScript, REST APIs, and PostgreSQL to build systems that scale.",
    category: "Backend",
    author: "Net-Crux Team",
    date: "Jul 1, 2026",
    readTime: "9 min read",
    img: "/expertise/api.jpg",
    intro:
      "A great frontend experience is only as good as the backend powering it. At Net-Crux, our server-side stack centres on Node.js and TypeScript — a combination that gives us speed of development, type safety across the full stack, and enough flexibility to handle everything from simple REST APIs to complex real-time systems. This is how we architect our backends and why this stack has earned its place in every project we ship.",
    sections: [
      {
        heading: "Why Node.js for Backend Development",
        body: "Node.js is not the only choice, but for the majority of web and mobile backends we build, it is the right one. The reasons are practical:",
        bullets: [
          "Non-blocking I/O: Node's event loop handles thousands of concurrent connections efficiently — ideal for the API-heavy, I/O-bound workloads typical in web and mobile backends",
          "Shared language: Our frontend and backend teams both write TypeScript. Shared types, shared utilities, shared validation schemas — no translation layer between teams",
          "Ecosystem: npm has a library for almost everything. Payment gateways, SMS providers, mapping APIs, push notifications — mature, well-maintained packages exist for every integration we encounter",
          "Real-time support: WebSocket and Server-Sent Events work naturally within the Node runtime, making features like live order tracking or chat straightforward to implement",
        ],
      },
      {
        heading: "TypeScript: Non-Negotiable",
        body: "We do not write backend JavaScript without TypeScript. The discipline it enforces pays dividends throughout the project lifecycle:",
        bullets: [
          "API contracts become self-documenting — the type of a request body or response is explicit in the code",
          "Refactoring is safe — the compiler catches every callsite affected by a change",
          "Onboarding new developers is faster — types serve as inline documentation",
          "Shared types between frontend and backend mean the API contract is enforced at compile time, not discovered at runtime",
        ],
      },
      {
        heading: "Our API Layer: Fastify",
        body: "We use Fastify over Express as our HTTP framework. Fastify is schema-first — routes declare their request/response shapes using JSON Schema or TypeBox, and Fastify validates inputs and serialises outputs automatically. This gives us runtime validation that complements TypeScript's compile-time safety, and the serialisation performance is significantly faster than Express. Fastify plugins handle authentication, rate limiting, CORS, and logging as first-class concerns.",
      },
      {
        heading: "Database: PostgreSQL as the Foundation",
        body: "For relational data — users, orders, products, transactions — PostgreSQL is our first choice. It is rock-solid, ACID-compliant, and its support for JSONB columns gives us document-style flexibility when we need it without sacrificing relational integrity. We use Drizzle ORM for its TypeScript-native query builder that generates fully typed results without the overhead and magic of heavier ORMs like Prisma.",
        bullets: [
          "Migrations managed with Drizzle Kit — version-controlled schema changes",
          "Row-level security for multi-tenant applications",
          "PostgreSQL's full-text search for simple search features without needing Elasticsearch",
          "Connection pooling with PgBouncer for high-concurrency production deployments",
        ],
      },
      {
        heading: "When We Reach for MongoDB",
        body: "PostgreSQL is our default, but MongoDB earns its place in specific scenarios: unstructured or highly variable document schemas, event logging and audit trails where write throughput is critical, and projects that use MongoDB's Atlas Search for vector search or full-text search at scale. We do not treat either as universally superior — the data model dictates the database choice.",
      },
      {
        heading: "Structure: How We Organise a Node.js Project",
        body: "Consistency across projects matters for maintainability and team mobility. Our standard structure separates concerns cleanly:",
        bullets: [
          "routes/ — HTTP layer, input validation, response shaping",
          "services/ — business logic, completely decoupled from HTTP",
          "db/ — database schema, queries, migrations",
          "lib/ — shared utilities, third-party client wrappers",
          "types/ — shared TypeScript interfaces exported for frontend consumption",
        ],
      },
      {
        heading: "Deployment and Infrastructure",
        body: "Node.js backends are containerised with Docker and deployed on AWS (EC2 with Application Load Balancer, or ECS for container orchestration at scale). Environment configuration is managed via AWS Secrets Manager, never hardcoded or committed to version control. GitHub Actions handles CI/CD — running tests, building Docker images, and deploying on merge to main.",
      },
    ],
    conclusion:
      "Node.js with TypeScript, Fastify, and PostgreSQL is a backend stack we trust in production. It is not the most exotic combination, but it is deliberately boring in the best way — well-understood, well-documented, and capable of handling real production load. If you are building a product that needs a reliable API layer, we would be happy to discuss how this stack fits your requirements.",
  },
]

export function getAllInsights(): InsightArticle[] {
  return insightArticles
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug)
}
