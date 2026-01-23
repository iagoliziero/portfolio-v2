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
    context:
      "Plataforma de gerenciamento de treinos com integração a um backend completo em arquitetura MVC.",
    problem:
      "Dificuldade em manter a autenticação segura e o estado global consistente entre os componentes do front-end.",
    solution:
      "Implementar autenticação JWT na conexão com o backend e gerenciar as variáveis globais utilizando a Context API.",
    stack: ["Vite", "React", "Javascript", "Tailwind"],
  },
  {
    id: 2,
    title: "Backend Peak Form",
    context:
      "API RESTful com autenticação JWT para gerenciar usuários, treinos e dados corporais.",
    problem:
      "Falta de um backend estruturado, seguro e integrado a um banco de dados confiável.",
    solution:
      "Desenvolver um backend completo com autenticação JWT e integração com um banco relacional PostgreSQL.",
    stack: ["Node", "Javascript", "Express", "JWT", "PostgreSQL"],
  },
];
