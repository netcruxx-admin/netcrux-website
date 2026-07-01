import {
  articleType,
  ContactInfoType,
  ExpertiseType,
  FaqType,
  FooterSocialType,
  NavItemType,
  ourWorkType,
  ProcessStepType,
  resourcesType,
  ServicesType,
  StatType,
  TeamType,
  TechType,
  TestimonialsType,
  ValuesType,
  whyChooseUsType,
} from "./types"

const navItems: NavItemType[] = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Work",
    path: "/work",
  },
  // {
  //   name: "Insights",
  //   path: "/insights",
  // },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

// NOTE: Update these with Net-Crux's real contact details before going live.
const contactInfo: ContactInfoType = {
  email: "netcruxx@gmail.com",
  phone: "+91 89883 84800",
  location: "RCC Building, Civil Lines, Dharamshala, Distt Kangra HP 176215",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM IST",
}

const footerSocial: FooterSocialType[] = [
  {
    platform: "Twitter",
    iconName: "mdi:twitter",
    path: "https://twitter.com/netcrux",
  },
  {
    platform: "LinkedIn",
    iconName: "mdi:linkedin",
    path: "https://linkedin.com/company/netcrux",
  },
  {
    platform: "GitHub",
    iconName: "mdi:github",
    path: "https://github.com/netcrux",
  },
  {
    platform: "Instagram",
    iconName: "mdi:instagram",
    path: "https://instagram.com/netcrux",
  },
]

const stats: StatType[] = [
  { value: "25+", label: "Projects delivered" },
  { value: "15+", label: "Happy clients" },
  { value: "1+", label: "Years of experience" },
  { value: "100%", label: "Client satisfaction" },
]

const testimonials: TestimonialsType[] = [
  {
    avatar: "/medy.jpeg",
    reviewer: "Madan Kumar",
    role: "Founder",
    company: "MedyTravels",
    reviewDate: "Mar 18, 2026",
    rating: 5,
    review:
      "Net-Crux built the MedyTravels platform exactly the way we envisioned it. They understood the medical-travel space deeply, delivered a fast, reliable product, and stayed responsive long after launch. Our patient enquiries have grown steadily ever since.",
    likes: 24,
    comments: 3,
  },
  {
    avatar: "/mealbox.jpeg",
    reviewer: "Aditya Sharma",
    role: "Founder",
    company: "Shiva Drink & Dine",
    reviewDate: "Apr 26, 2026",
    rating: 5,
    review:
      "Meal Box has completely streamlined how we take and manage orders at Shiva Drink & Dine. The app is clean, quick, and our staff picked it up in a day. Net-Crux genuinely understood what a busy restaurant needs and it shows in every detail.",
    likes: 19,
    comments: 2,
  },
  {
    avatar: "/mealbox1.jpeg",
    reviewer: "Sahil Choudhary",
    role: "Owner",
    company: "Meal Box User",
    reviewDate: "May 14, 2026",
    rating: 5,
    review:
      "Meal Box made running my outlet so much easier — from menu updates to tracking daily orders, everything just works. It's smooth, dependable, and the support from Net-Crux has been outstanding. Highly recommend them to any food business.",
    likes: 16,
    comments: 1,
  },
]

const expertise: ExpertiseType[] = [
  {
    title: "Mobile App Development",
    desc: "Pixel-perfect iOS and Android apps built once with React Native and Flutter — native performance, faster launches, and a single codebase that's easier to grow.",
    img: "/expertise/mobile.jpg",
  },
  {
    title: "Web App Development",
    desc: "Blazing-fast, SEO-friendly web apps engineered with Next.js and React, tuned for sub-second loads and ready to scale from your first user to your millionth.",
    img: "/expertise/web.jpg",
  },
  {
    title: "AI Development & Integration",
    desc: "LLM-powered chatbots, copilots, semantic search, and workflow automation — built with OpenAI, Claude, and LangChain to make your product genuinely smarter.",
    img: "/expertise/ai.jpg",
  },
  {
    title: "Blockchain Development",
    desc: "Smart contracts, dApps, token systems, and Web3 wallet integrations on Ethereum and EVM chains — secure, audited, and ready to handle real on-chain value.",
    img: "/expertise/blockchain.jpg",
  },
  {
    title: "Desktop App Development",
    desc: "Cross-platform desktop apps for Windows, macOS, and Linux built with Electron — native-feeling experiences from a single, maintainable codebase.",
    img: "/expertise/desktop.jpg",
  },
  {
    title: "UI/UX Design",
    desc: "User research, wireframes, and reusable design systems that turn complex flows into interfaces people understand instantly — and convert better because of it.",
    img: "/expertise/design.jpg",
  },
  {
    title: "Cloud & DevOps",
    desc: "Automated CI/CD, containerized deployments, and resilient AWS and GCP architecture so you ship daily with confidence and sleep through traffic spikes.",
    img: "/expertise/cloud.jpg",
  },
  {
    title: "API & Backend Engineering",
    desc: "Secure, well-documented REST and GraphQL APIs and microservices that power your product and plug seamlessly into the tools your business already runs on.",
    img: "/expertise/api.jpg",
  },
  {
    title: "QA & Automation",
    desc: "End-to-end and automated test suites that catch regressions before your users do — protecting quality and uptime with every single release.",
    img: "/expertise/qa.jpg",
  },
]

const ourWork: ourWorkType[] = [
  {
    title: "MedyTravels",
    category: "Taxi Booking App",
    desc: "A ride-hailing app for booking taxis on demand, with real-time driver tracking, upfront fare estimates, and secure in-app payments.",
    result: "Live ride tracking & instant booking",
    images: ["/medy.jpeg", "/medy1.jpeg", "/medy2.jpeg", "/medy3.jpeg"],
    link: "https://play.google.com/store/apps/details?id=com.medy.passenger",
  },
  {
    title: "Medicare",
    category: "Healthcare Platform",
    desc: "A healthcare app for both doctors and patients — patients book appointments and keep their full medical history in one place, while doctors manage schedules and access patient records securely.",
    result: "Unified records for doctors & patients",
    images: ["/medicare1.jpeg", "/medicare2.jpeg", "/medicare3.jpeg", "/medicare4.jpeg"],
  },
  {
    title: "MealBox",
    category: "Food & Delivery App",
    desc: "A tiffin-service app for subscribing to home-style meals, browsing daily menus, customizing plans, and tracking deliveries in real time.",
    result: "Meal subscriptions & live delivery tracking",
    images: ["/mealbox.jpeg", "/mealbox1.jpeg", "/mealbox2.jpeg", "/mealbox3.jpeg"],
  },
]

const services: ServicesType[] = [
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that feel fast and look beautiful.",
    icon: "mdi:cellphone",
  },
  {
    title: "Web App Development",
    desc: "Responsive, scalable web applications built with Next.js and React using the latest web technologies.",
    icon: "mdi:web",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, accessible interfaces and design systems crafted for seamless, conversion-focused experiences.",
    icon: "mdi:palette-outline",
  },
  {
    title: "AI Development & Integration",
    desc: "LLM-powered chatbots, copilots, RAG-based search, and automation integrated securely into your product with OpenAI, Claude, and modern AI tooling.",
    icon: "mdi:robot-outline",
  },
  {
    title: "Blockchain Development",
    desc: "Smart contracts, dApps, NFT and token platforms, and Web3 integrations engineered for security and transparency on Ethereum and EVM chains.",
    icon: "mdi:ethereum",
  },
  {
    title: "Desktop App Development",
    desc: "Cross-platform Windows, macOS, and Linux desktop applications built with Electron from a single, maintainable codebase.",
    icon: "mdi:monitor",
  },
  {
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure, CI/CD automation, and monitoring on AWS and GCP that scale with you.",
    icon: "mdi:cloud-outline",
  },
  {
    title: "API & Integrations",
    desc: "Secure REST and GraphQL APIs plus third-party integrations that connect your product to the tools you use.",
    icon: "mdi:api",
  },
  {
    title: "QA & Maintenance",
    desc: "Automated testing, performance tuning, and ongoing support to keep your product fast, secure, and stable.",
    icon: "mdi:shield-check-outline",
  },
]

const process: ProcessStepType[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dig into your goals, users, and constraints to define a clear, prioritized product roadmap.",
    icon: "mdi:lightbulb-outline",
  },
  {
    step: "02",
    title: "Design",
    desc: "We craft wireframes and high-fidelity prototypes, validating ideas with you before a line of code is written.",
    icon: "mdi:palette-outline",
  },
  {
    step: "03",
    title: "Development",
    desc: "We build in agile sprints with regular demos, so you see progress and steer the product as it grows.",
    icon: "mdi:code-tags",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We deploy, monitor, and iterate post-launch, keeping your product reliable and ready to scale.",
    icon: "mdi:rocket-launch-outline",
  },
]

const techStack: TechType[] = [
  { name: "React", icon: "mdi:react" },
  { name: "Next.js", icon: "mdi:nextjs" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "React Native", icon: "mdi:react" },
  { name: "Flutter", icon: "mdi:flutter" },
  { name: "PostgreSQL", icon: "mdi:database-outline" },
  { name: "AWS", icon: "mdi:aws" },
  { name: "Docker", icon: "mdi:docker" },
  { name: "Electron", icon: "mdi:electron-framework" },
  { name: "Solidity", icon: "simple-icons:solidity" },
  { name: "Ethereum", icon: "mdi:ethereum" },
  { name: "OpenAI", icon: "simple-icons:openai" },
  { name: "Claude", icon: "simple-icons:anthropic" },
  { name: "LangChain", icon: "simple-icons:langchain" },
  { name: "Figma", icon: "mdi:figma" },
]

// Tools we use day-to-day to design, build, and ship faster.
const aiTools: TechType[] = [
  { name: "Claude", icon: "simple-icons:anthropic" },
  { name: "ChatGPT", icon: "simple-icons:openai" },
  { name: "GitHub Copilot", icon: "mdi:github" },
  { name: "Cursor", icon: "mdi:cursor-default-outline" },
  { name: "v0", icon: "mdi:vercel" },
  { name: "Midjourney", icon: "simple-icons:midjourney" },
]

const team: TeamType[] = [
  {
    name: "Ethan Carter",
    role: "Founder & CEO",
  },
  {
    name: "Sophia Bennett",
    role: "Head of Design",
  },
  {
    name: "Liam Harper",
    role: "Lead Engineer",
  },
  {
    name: "Maya Patel",
    role: "Product Manager",
  },
]

const ourValues: ValuesType[] = [
  {
    title: "Collaboration",
    desc: "We work as an extension of your team, with transparent communication and shared ownership at every step.",
    icon: "mdi:puzzle",
  },
  {
    title: "Client-Centric",
    desc: "Your goals drive every decision. We measure our success by the outcomes we deliver for your business.",
    icon: "mdi:account-heart-outline",
  },
  {
    title: "Innovation",
    desc: "We stay ahead of the curve, applying proven, modern technology to build solutions that last.",
    icon: "mdi:rocket-outline",
  },
]

const whyChooseUs: whyChooseUsType[] = [
  {
    title: "Technical Expertise",
    desc: "A senior team with deep experience in mobile and web engineering, ensuring robust and scalable solutions.",
    icon: "mdi:code-braces",
  },
  {
    title: "Creative Design",
    desc: "We pair engineering rigor with thoughtful design to deliver products that are both beautiful and usable.",
    icon: "ph:pencil-line",
  },
  {
    title: "Timely Delivery",
    desc: "Agile sprints and clear milestones mean we deliver on time and within budget, every single time.",
    icon: "mdi:clock-outline",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't disappear at launch. We offer ongoing support and a roadmap to keep your product growing.",
    icon: "mdi:handshake-outline",
  },
]

const faqs: FaqType[] = [
  {
    question: "What technologies do you build with?",
    answer:
      "Our core stack is React, Next.js, TypeScript, and Node.js for web, with React Native and Flutter for mobile and Electron for desktop. On the backend we work with PostgreSQL, containerized with Docker and deployed on AWS and GCP.",
  },
  {
    question: "Can you integrate AI into my product?",
    answer:
      "Yes. We build LLM-powered chatbots, copilots, RAG-based semantic search, and workflow automation using OpenAI, Claude, and LangChain — integrated securely into your existing product and data.",
  },
  {
    question: "Do you build cross-platform mobile apps?",
    answer:
      "We do. Using React Native and Flutter we ship a single, maintainable codebase that runs on both iOS and Android with native-feeling performance — faster to launch and cheaper to maintain than two separate apps.",
  },
  {
    question: "Do you work with blockchain and Web3?",
    answer:
      "Absolutely. We develop smart contracts, dApps, token and NFT platforms, and wallet integrations in Solidity on Ethereum and EVM-compatible chains, with security and auditability built in from day one.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes. We offer flexible retainers covering monitoring, CI/CD, performance tuning, security updates, and new features so your product stays fast, secure, and stable long after launch.",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. Once a project is delivered and settled, you own 100% of the source code, designs, and intellectual property.",
  },
]

const resources: resourcesType[] = [
  {
    title: "Mobile App Development Checklist",
  },
  {
    title: "Web App Security Best Practices",
  },
  {
    title: "Technology Stack Comparison Chart",
  },
]

const topArticles: articleType[] = [
  {
    img: "/public-image.png",
    category: "Mobile",
    title: "The Future of Mobile App Development: Trends to Watch in 2024",
    desc: "Explore the latest trends shaping the mobile app landscape in 2024, from AI integration to AR.",
    author: "Sophia Bennett",
    date: "Jan 12, 2024",
    readTime: "6 min read",
  },
  {
    img: "/public-image.png",
    category: "Web",
    title: "Web App Development: Best Practices for Scalability and Performance",
    desc: "Learn essential strategies for building applications that can handle rapid growth.",
    author: "Liam Harper",
    date: "Feb 03, 2024",
    readTime: "8 min read",
  },
  {
    img: "/public-image.png",
    category: "Engineering",
    title: "Choosing the Right Technology Stack for Your App",
    desc: "Get expert advice on selecting the ideal technology stack for your app.",
    author: "Ethan Carter",
    date: "Feb 21, 2024",
    readTime: "5 min read",
  },
]

const featuredArticles: articleType[] = [
  {
    category: "Mobile App Development",
    title: "Building a Successful App: From Concept to Launch",
    desc: "A step-by-step guide to creating a successful mobile app, from ideation to launch.",
    img: "/public-image.png",
    author: "Maya Patel",
    date: "Mar 04, 2024",
    readTime: "7 min read",
  },
  {
    category: "Web App Development",
    title: "Optimizing Your Web App for User Experience",
    desc: "Discover techniques to enhance your web app's user experience, including responsive design.",
    img: "/public-image.png",
    author: "Sophia Bennett",
    date: "Mar 18, 2024",
    readTime: "6 min read",
  },
  {
    category: "Technology Trends",
    title: "The Rise of Serverless Architecture: Benefits and Use Cases",
    desc: "Explore the advantages of serverless architecture, including scalability and cost savings.",
    img: "/public-image.png",
    author: "Liam Harper",
    date: "Apr 02, 2024",
    readTime: "9 min read",
  },
]

export {
  navItems,
  contactInfo,
  footerSocial,
  stats,
  testimonials,
  expertise,
  ourWork,
  services,
  process,
  techStack,
  aiTools,
  team,
  ourValues,
  whyChooseUs,
  faqs,
  resources,
  topArticles,
  featuredArticles,
}
