import { FooterSocialType, NavItemType } from "./types"

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

const testimonialData = [
  {
    avtar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ava Harper",
    date: "2023-08-15",
    star: "⭐⭐⭐⭐⭐",
    desc: "Net-Crux transformed our vision into a stunning and functional mobile app. Their team was professional, responsive, and delivered exceptional results.",
    likes: 12,
    comments: 1,
  },
  {
    avtar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Liam Foster",
    date: "2023-09-22",
    star: "⭐⭐⭐⭐⭐",
    desc: "We were impressed with Net-Crux’s expertise in web app development. They created a scalable and user-friendly platform that exceeded our expectations.",
    likes: 15,
    comments: 0,
  },
  {
    avtar: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Chloe Reed",
    date: "2023-10-10",
    star: "⭐⭐⭐⭐⭐",
    desc: "Net-Crux’s UI/UX design team created an intuitive and engaging interface for our app, resulting in increased user satisfaction and engagement.",
    likes: 10,
    comments: 2,
  },
]
const services = [
  {
    title: "Mobile App Development",
    desc: "Building native and cross-platform mobile applications for iOS and Android.",
    img: "/serviceOne.png",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    img: "/serviceTwo.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/serviceThree.png",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    img: "/serviceTwo.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/serviceThree.png",
  },
]
const ourWorkData = [
  {
    title: "EcoTrack",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    image: "/serviceTwo.png",
  },
  {
    title: "HealthHUb",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    image: "/serviceTwo.png",
  },
  {
    title: "EduConnect",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    image: "/serviceTwo.png",
  },
  {
    title: "FinWise",
    desc: "A susutainbility living app promotting eco-friendly habits.",
    image: "/serviceTwo.png",
  },
]

//insights data
const resources = [
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
const topArticles = [
  {
    img: "/publicImage.png",
    title: "The Future of Mobile App Development: Trends to Watch in 2024",
    desc: "Explore the latest trends shaping the mobile app landscape in 2024, from AI integration to AR.",
  },
  {
    img: "/publicImage.png",
    title: "Web App Development: Best Practices for Scalability and Performance",
    desc: "Learn essential strategies for building applications that can handle rapid growth.",
  },
  {
    img: "/publicImage.png",
    title: "Choosing the Right Technology Stack for Your App",
    desc: "Get expert advice on selecting the ideal technology stack for your app.",
  },
]

const featuredArticles = [
  {
    category: "Mobile App Development",
    title: "Building a Successful App: From Concept to Launch",
    desc: "A step-by-step guide to creating a successful mobile app, from ideation to launch.",
    img: "/publicImage.png",
  },
  {
    category: "Web App Development",
    title: "Optimizing Your Web App for User Experience",
    desc: "Discover techniques to enhance your web app’s user experience, including responsive design.",
    img: "/publicImage.png",
  },
  {
    category: "Technology Trends",
    title: "The Rise of Serverless Architecture: Benefits and Use Cases",
    desc: "Explore the advantages of serverless architecture, including scalability and cost savings.",
    img: "/publicImage.png",
  },
]

//about data

const team = [
  {
    name: "Ethan Carter",
    role: "CEO",
    img: "/avatar.png",
  },
  {
    name: "Sophia Bennett",
    role: "Head of Design",
    img: "/avatar.png",
  },
  {
    name: "Liam Harper",
    role: "Lead Developer",
    img: "/avatar.png",
  },
]

const values = [
  {
    title: "Collaboration",
    desc: "We foster a collaborative environment, both internally and with our clients, to ensure seamless communication and project success.",
    // icon: <FaUserTie className="text-gray-200 text-2xl mb-3" />,
  },
  {
    title: "Client-Centric",
    desc: "Our clients are at the heart of everything we do. We prioritize their needs and goals, delivering solutions that align with their vision.",
    // icon: <FaUserTie className="text-gray-200 text-2xl mb-3" />,
  },
  {
    title: "Innovation",
    desc: "We embrace innovation and stay ahead of the curve, leveraging the latest technologies to create cutting-edge solutions that drive results.",
    // icon: <FaLightbulb className="text-gray-200 text-2xl mb-3" />,
  },
]

const chooseUs = [
  {
    title: "Technical Expertise",
    desc: "Our team possesses deep technical expertise in mobile and web app development, ensuring robust and scalable solutions.",
    // icon: <FaCogs className="text-gray-200 text-2xl mb-3" />,
  },
  {
    title: "Creative Design",
    desc: "We combine technical prowess with creative design to deliver visually stunning and user-friendly applications.",
    // icon: <FaPencilRuler className="text-gray-200 text-2xl mb-3" />,
  },
  {
    title: "Timely Delivery",
    desc: "We understand the importance of deadlines and are committed to delivering projects on time and within budget.",
    // icon: <FaClock className="text-gray-200 text-2xl mb-3" />,
  },
]

const projectsHere = [
  {
    title: "Mobile App Development",
    desc: "Building native and cross-platform mobile applications for iOS and Android.",
    img: "/serviceTwo.png",
  },
  {
    title: "Web App Development",
    desc: "Creating responsive and scalable web applications using the latest technologies.",
    img: "/serviceThree.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/serviceOne.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/serviceOne.png",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for seamless experiences.",
    img: "/serviceOne.png",
  },
]

export {
  navItems,
  footerSocial,
  testimonialData,
  services,
  ourWorkData,
  resources,
  topArticles,
  featuredArticles,
  team,
  chooseUs,
  values,
  projectsHere,
}
