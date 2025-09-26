import {
  articleType,
  ExpertiseType,
  FooterSocialType,
  NavItemType,
  ourWorkType,
  resourcesType,
  ServicesType,
  TeamType,
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
    name: "Insights",
    path: "/insights",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Work",
    path: "/work",
  },
]

const footerSocial: FooterSocialType[] = [
  {
    platform: "Twitter",
    iconName: "mdi:twitter",
    path: "https://twitter.com",
  },
  {
    platform: "LinkedIn",
    iconName: "mdi:linkedin",
    path: "https://linkedin.com",
  },
  {
    platform: "Instagram",
    iconName: "mdi:instagram",
    path: "https://instagram.com",
  },
]

const testimonials: TestimonialsType[] = [
  {
    avatar: "/ava-harper.jpg",
    reviewer: "Ava Harper",
    reviewDate: "2023-08-15",
    rating: 4,
    review:
      "Net-Crux transformed our vision into a stunning and functional mobile app. Their team was professional, responsive, and delivered exceptional results.",
    likes: 12,
    comments: 1,
  },
  {
    avatar: "/liam-foster.jpg",
    reviewer: "Liam Foster",
    reviewDate: "2023-09-22",
    rating: 4,
    review:
      "We were impressed with Net-Crux’s expertise in web app development. They created a scalable and user-friendly platform that exceeded our expectations.",
    likes: 15,
    comments: 0,
  },
  {
    avatar: "/chloe-reed.jpg",
    reviewer: "Chloe Reed",
    reviewDate: "2023-10-10",
    rating: 4,
    review:
      "Net-Crux’s UI/UX design team created an intuitive and engaging interface for our app, resulting in increased user satisfaction and engagement.",
    likes: 10,
    comments: 2,
  },
]

const expertise: ExpertiseType[] = [
  {
    title: "Mobile App Development",
    desc: "Building native and cross-platform mobile applications for iOS and Android.",
    img: "/service-one.png",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    img: "/service-two.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/service-three.png",
  },
  {
    title: "Mobile App Development",
    desc: "Building native and cross-platform mobile applications for iOS and Android.",
    img: "/service-one.png",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    img: "/service-two.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/service-three.png",
  },
]

const ourWork: ourWorkType[] = [
  {
    title: "EcoTrack",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-one.png",
  },
  {
    title: "HealthHub",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-two.png",
  },
  {
    title: "EduConnect",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-three.png",
  },
  {
    title: "FinWise",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-two.png",
  },
  {
    title: "EcoTrack",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-one.png",
  },
  {
    title: "HealthHub",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-two.png",
  },
  {
    title: "EduConnect",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-three.png",
  },
  {
    title: "FinWise",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    img: "/service-two.png",
  },
]

const services: ServicesType[] = [
  {
    title: "Mobile App Development",
    desc: "Building native and cross-platform mobile applications for iOS and Android.",
    icon: "fa:mobile",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    icon: "mdi:web",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    icon: "mdi:design",
  },
]

const team: TeamType[] = [
  {
    name: "Ethan Carter",
    role: "CEO",
  },
  {
    name: "Sophia Bennett",
    role: "Head of Design",
  },
  {
    name: "Liam Harper",
    role: "Lead Developer",
  },
]

const ourValues: ValuesType[] = [
  {
    title: "Collaboration",
    desc: "We foster a collaborative environment, both internally and with our clients, to ensure seamless communication and project success.",
    icon: "mdi:puzzle",
  },
  {
    title: "Client-Centric",
    desc: "Our clients are at the heart of everything we do. We prioritize their needs and goals, delivering solutions that align with their vision.",
    icon: "mdi:people",
  },
  {
    title: "Innovation",
    desc: "We embrace innovation and stay ahead of the curve, leveraging the latest technologies to create cutting-edge solutions that drive results.",
    icon: "mdi:rocket-outline",
  },
]

const whyChooseUs: whyChooseUsType[] = [
  {
    title: "Technical Expertise",
    desc: "Our team possesses deep technical expertise in mobile and web app development, ensuring robust and scalable solutions.",
    icon: "mdi:code",
  },
  {
    title: "Creative Design",
    desc: "We combine technical prowess with creative design to deliver visually stunning and user-friendly applications.",
    icon: "ph:pencil-line",
  },
  {
    title: "Timely Delivery",
    desc: "We understand the importance of deadlines and are committed to delivering projects on time and within budget.",
    icon: "mdi:clock-outline",
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
    title: "The Future of Mobile App Development: Trends to Watch in 2024",
    desc: "Explore the latest trends shaping the mobile app landscape in 2024, from AI integration to AR.",
  },
  {
    img: "/public-image.png",
    title: "Web App Development: Best Practices for Scalability and Performance",
    desc: "Learn essential strategies for building applications that can handle rapid growth.",
  },
  {
    img: "/public-image.png",
    title: "Choosing the Right Technology Stack for Your App",
    desc: "Get expert advice on selecting the ideal technology stack for your app.",
  },
]

const featuredArticles: articleType[] = [
  {
    category: "Mobile App Development",
    title: "Building a Successful App: From Concept to Launch",
    desc: "A step-by-step guide to creating a successful mobile app, from ideation to launch.",
    img: "/public-image.png",
  },
  {
    category: "Web App Development",
    title: "Optimizing Your Web App for User Experience",
    desc: "Discover techniques to enhance your web app’s user experience, including responsive design.",
    img: "/public-image.png",
  },
  {
    category: "Technology Trends",
    title: "The Rise of Serverless Architecture: Benefits and Use Cases",
    desc: "Explore the advantages of serverless architecture, including scalability and cost savings.",
    img: "/public-image.png",
  },
]

export {
  navItems,
  footerSocial,
  testimonials,
  expertise,
  ourWork,
  services,
  team,
  ourValues,
  whyChooseUs,
  resources,
  topArticles,
  featuredArticles,
}
