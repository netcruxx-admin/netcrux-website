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
  {
    name: "Insights",
    path: "/insights",
  },
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
  location: "Dharamshala.co, RCC Building, Civil Lines, Jawahar Nagar, Dharamshala, Himachal Pradesh 176215",
  mapUrl: "https://maps.app.goo.gl/7KiRCSvrgjRBCL8BA",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM IST",
}

const footerSocial: FooterSocialType[] = [
  // {
  //   platform: "Twitter",
  //   iconName: "mdi:twitter",
  //   path: "https://twitter.com/netcrux",
  // },
  {
    platform: "LinkedIn",
    iconName: "mdi:linkedin",
    path: "https://www.linkedin.com/in/net-crux-bb7b4236a/",
  },
  {
    platform: "GitHub",
    iconName: "mdi:github",
    path: "https://github.com/netcruxx-admin",
  },
  {
    platform: "Instagram",
    iconName: "mdi:instagram",
    path: "https://www.instagram.com/net.crux",
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
  {
    title: "Buzzo",
    category: "Photo Gallery App",
    desc: "A simple, secure, and intelligent photo gallery app that gives you full control over your memories — everything stays on your device, never uploaded or shared.",
    result: "Private, on-device photo management with zero data collection",
    images: ["/work/buzzo/buzzo.jpeg", "/work/buzzo/buzzo2.jpeg", "/work/buzzo/buzzo3.jpeg", "/work/buzzo/buzzo4.jpeg", "/work/buzzo/buzzo5.jpeg", "/work/buzzo/buzzo6.jpeg"],
    link: "https://play.google.com/store/apps/details?id=com.buzzo",
  },
  {
    title: "Rozgari",
    category: "Web & Mobile App",
    desc: "A dual-sided platform connecting workers with suppliers — job seekers can discover and apply for work opportunities while employers post requirements and find skilled workers instantly.",
    result: "Seamless job matching for workers & suppliers",
    images: ["/rozgari.png", "/rozgari1.png", "/rozgari2.png", "/rozgari3.png", "/rozgari5.png", "/rozgari6.png"],
    link: "https://rozgari.com",
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
  { name: "GitHub Copilot", icon: "simple-icons:github" },
  { name: "Cursor", icon: "simple-icons:cursor" },
  { name: "v0", icon: "simple-icons:vercel" },
  { name: "Gemini", icon: "simple-icons:googlegemini" },
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
    img: "/expertise/web.jpg",
    category: "Engineering",
    title: "Why We Choose Next.js for Every Web Project",
    desc: "A deep dive into why Next.js is our default framework — from the App Router to built-in performance optimisations.",
    author: "Net-Crux Team",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    slug: "why-we-choose-nextjs",
  },
  {
    img: "/expertise/mobile.jpg",
    category: "Mobile",
    title: "React Native: One Codebase, Two Platforms, Zero Compromise",
    desc: "How we use React Native's New Architecture to ship high-performance iOS and Android apps from a single shared codebase.",
    author: "Net-Crux Team",
    date: "Jun 20, 2026",
    readTime: "8 min read",
    slug: "react-native-ios-android",
  },
  {
    img: "/expertise/api.jpg",
    category: "Backend",
    title: "Node.js + TypeScript: How We Build Reliable Backends",
    desc: "An inside look at how we structure Node.js backends with TypeScript and PostgreSQL to build systems that scale.",
    author: "Net-Crux Team",
    date: "Jul 1, 2026",
    readTime: "9 min read",
    slug: "nodejs-typescript-backend",
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
}
