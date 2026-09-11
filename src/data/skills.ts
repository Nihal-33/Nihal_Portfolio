export interface SkillCategory {
  title: string;
  skills: { name: string; level: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "C++", level: "Core Skill" },
      { name: "Java", level: "Core Skill" },
      { name: "JavaScript", level: "Working With" },
      { name: "TypeScript", level: "Learning" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Working With" },
      { name: "Tailwind CSS", level: "Working With" },
      { name: "HTML & CSS", level: "Core Skill" },
      { name: "Responsive Design", level: "Core Skill" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "REST APIs", level: "Working With" },
      { name: "SQL", level: "Learning" }
    ]
  },
  {
    title: "Tools & DB",
    skills: [
      { name: "Git & GitHub", level: "Core Skill" },
      { name: "VS Code", level: "Core Skill" },
      { name: "Vercel", level: "Working With" },
      { name: "Supabase", level: "Exploring" }
    ]
  },
  {
    title: "AI & Innovation",
    skills: [
      { name: "Generative AI", level: "Exploring" },
      { name: "Prompt Engineering", level: "Working With" },
      { name: "AI API Integration", level: "Learning" },
      { name: "Vibe Coding", level: "Core Skill" }
    ]
  }
];
