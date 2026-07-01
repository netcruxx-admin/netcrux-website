type NavItemType = {
  name: string
  path: string
}

type FooterSocialType = {
  platform: string
  iconName: string
  path: string
}

type TestimonialsType = {
  reviewer: string
  role: string
  company: string
  avatar: string
  reviewDate: string
  rating: number
  review: string
  likes: number
  comments: number
}

type ExpertiseType = {
  title: string
  desc: string
  img: string
}

type ourWorkType = {
  title: string
  desc: string
  images: string[]
  category: string
  result: string
  link?: string
}

type ServicesType = {
  title: string
  desc: string
  icon: string
}

type TeamType = {
  name: string
  role: string
}

type ValuesType = {
  title: string
  desc: string
  icon: string
}

type whyChooseUsType = {
  title: string
  desc: string
  icon: string
}

type resourcesType = {
  title: string
}

type articleType = {
  title: string
  desc: string
  img: string
  category?: string
  author?: string
  date?: string
  readTime?: string
}

type StatType = {
  value: string
  label: string
}

type ProcessStepType = {
  step: string
  title: string
  desc: string
  icon: string
}

type TechType = {
  name: string
  icon: string
}

type FaqType = {
  question: string
  answer: string
}

type ContactInfoType = {
  email: string
  phone: string
  location: string
  hours: string
}

export type {
  NavItemType,
  FooterSocialType,
  TestimonialsType,
  ExpertiseType,
  ourWorkType,
  ServicesType,
  TeamType,
  ValuesType,
  whyChooseUsType,
  resourcesType,
  articleType,
  StatType,
  ProcessStepType,
  TechType,
  FaqType,
  ContactInfoType,
}
