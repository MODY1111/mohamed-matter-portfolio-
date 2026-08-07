export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Figma",
    duty: "Design systems, prototyping & handoff",
    image: { light: "/assets/images/section/tech-1.svg", width: 19, height: 28 },
    progress: 95,
  },
  {
    name: "Adobe Photoshop",
    duty: "Raster graphics editor",
    image: { light: "/assets/images/section/tech-3.svg", width: 29, height: 28 },
    progress: 75,
  },
  {
    name: "Visual Studio Code",
    duty: "Code editor for prototype builds & handoff",
    image: { light: "/assets/images/section/tech-4.svg", width: 28, height: 28 },
    progress: 70,
  },
  {
    name: "ChatGPT",
    duty: "AI research & content assistant",
    image: { light: "/assets/images/section/tech-5.svg", width: 28, height: 28 },
    progress: 85,
  },
  {
    name: "Claude Code",
    duty: "AI pair-programming for prototypes & sites",
    image: { light: "/assets/images/section/tech-6.svg", width: 28, height: 28 },
    progress: 80,
  },
];
