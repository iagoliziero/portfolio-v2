import {
  heroLinksProps as links,
  projectProps as project,
  stackProps as stacks,
} from "@/types/types";

export const heroLinks: links[] = [
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export const stack: stacks[] = [
  {
    id: 1,
    stackType: "frontend",
    stackItems: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 2,
    stackType: "backend",
    stackItems: ["PHP", "Laravel", "Selenium" , "Node.js", "Express.js"],
  },
  {
    id: 3,
    stackType: "database",
    stackItems: ["MySQL", "MongoDB"],
  },
  {
    id: 4,
    stackType: "devops",
    stackItems: ["Git", "GitHub", "Docker", "Rancher Desktop"],
  },
];

export const projects: project[] = [
  {
    id: 1,
    title: "Peak Form",
    context: "Plataforma front-end para gerenciamento de treinos integrada a um backend MVC.",
    problem: "Gerenciar autenticação e estado global de forma consistente no front-end.",
    solution: "Autenticação JWT integrada ao backend e estado global com Context API.",
    stack: ["Vite", "React", "JavaScript", "Tailwind"],
    link: "https://github.com/iagoliziero/peak-form",
  },
  {
    id: 2,
    title: "Backend Peak Form",
    context: "API REST para gerenciamento de usuários, treinos e métricas corporais.",
    problem: "Ausência de backend seguro e estruturado para persistência de dados.",
    solution: "Backend em Node.js com JWT e PostgreSQL.",
    stack: ["Node.js", "JavaScript", "Express", "JWT", "PostgreSQL"],
    link: "https://github.com/iagoliziero/backend-peakform",
  }
  
];
