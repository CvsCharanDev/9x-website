export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface IndustryData {
  id: string;
  slug: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  stats: {
    value: string;
    label: string;
  }[];
}

export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CareerOpening {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Product" | "Operations" | "FinTech";
  location: "Hyderabad, India" | "Dubai, UAE" | "Remote";
  type: "Full-Time" | "Contract";
  experience: string;
  summary: string;
  requirements: string[];
}

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: "Engineering" | "AI & Innovation" | "FinTech" | "Company";
  content?: string;
}
