export type Skill = { name: string; icon: string }; // icon path under /public/icons
export type SkillCategory = { title: string; items: Skill[] };

export const SKILLS: SkillCategory[] = [
  {
    title: "Back-End",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "RubyOnRails", icon: "/icons/rubyonrails.svg" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css3.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
      { name: "CI/CD", icon: "/icons/cicd.svg" },
      { name: "Terraform", icon: "/icons/terraform.svg" },
      { name: "Packer", icon: "/icons/packer.svg" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
    ],
  },
  {
    title: "LLM & Integrations",
    items: [
      { name: "OpenAI", icon: "/icons/openai.svg" },
      { name: "Pytorch", icon: "/icons/pytorch.svg" },
      { name: "LangChain", icon: "/icons/langchain.svg" },
      { name: "MCP", icon: "/icons/mcp.svg" },
    ],
  },
];
