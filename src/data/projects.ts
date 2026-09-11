export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Velmora AI",
    category: "AI / LLM Application",
    description: "An AI assistant concept designed for natural conversations, contextual memory, document understanding and voice interaction.",
    technologies: ["Python", "LLM API", "AI"],
    featured: true,
    image: "/images/projects/velmora.jpg",
    link: "#",
    github: "#"
  },
  {
    id: "02",
    title: "YouTube AI Summarizer",
    category: "AI / Productivity",
    description: "An AI-powered application concept that transforms YouTube videos into structured summaries and useful notes.",
    technologies: ["React", "API Integration", "AI", "Supabase"],
    image: "/images/projects/youtube.jpg",
    link: "#",
    github: "#"
  },
  {
    id: "03",
    title: "Flash Mind AI",
    category: "AI / Productivity",
    description: "An AI-powered flashcard generator that transforms any topic into smart, structured flashcards for fast and effective learning.",
    technologies: ["React", "AI", "API"],
    image: "/images/projects/flashmind.jpg",
    link: "https://flash-mind-ai-sigma.vercel.app/",
    github: "#"
  },
  {
    id: "04",
    title: "Fake News Detector",
    category: "AI / Web Application",
    description: "A web application concept that analyzes news content and helps users understand whether information appears trustworthy.",
    technologies: ["React", "AI", "API"],
    image: "/images/projects/fakenews.jpg",
    link: "https://truth-lensai.netlify.app/",
    github: "#"
  },
  {
    id: "05",
    title: "Doctor Appointment Booking Portal",
    category: "Healthcare / Full Stack",
    description: "A modern healthcare appointment platform designed to simplify doctor discovery and appointment booking.",
    technologies: ["React", "Node.js", "Database", "API"],
    image: "/images/projects/doctor.jpg",
    link: "https://doctor-appointment-booking-portal.vercel.app/",
    github: "#"
  },
  {
    id: "06",
    title: "Digital Learning Library",
    category: "Education",
    description: "An interactive digital learning platform for studying web technologies through topic-based practice, quizzes and learning resources.",
    technologies: ["React", "JavaScript", "AI"],
    image: "/images/projects/learning.jpg",
    link: "https://librodev.vercel.app/",
    github: "#"
  },
  {
    id: "07",
    title: "Billing Software",
    category: "Business / Full Stack",
    description: "A comprehensive billing and invoicing software for managing products, generating bills, tracking payments and analyzing sales data.",
    technologies: ["React", "Node.js", "Database", "API"],
    image: "/images/projects/billing.jpg",
    link: "https://patanjali-billing-software.vercel.app",
    github: "#"
  }
];
