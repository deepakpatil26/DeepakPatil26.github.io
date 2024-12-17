export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

export type Theme = "light" | "dark";
